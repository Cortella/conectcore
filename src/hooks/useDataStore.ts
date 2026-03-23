/* ────────────────────────────────────────────────────────────
   useDataStore — Hook genérico de CRUD com localStorage
   ────────────────────────────────────────────────────────────
   Usa os dados JSON como fallback e persiste edições no
   localStorage, funcionando como um "mini banco de dados"
   client-side.

   Uso:
     const store = useDataStore<Service>("services", defaultServices);
     store.items      → lista atual
     store.add(item)  → adiciona
     store.update(id, patch) → atualiza parcialmente
     store.remove(id) → remove
     store.reset()    → volta ao JSON original
   ──────────────────────────────────────────────────────────── */

import { useState, useCallback } from "react";
import type { BaseEntity, DataStore } from "../types";

const STORAGE_PREFIX = "conectcore_data_";

function loadFromStorage<T>(key: string): T[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    return JSON.parse(raw) as T[];
  } catch {
    return null;
  }
}

function saveToStorage<T>(key: string, data: T[]) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
  } catch {
    console.warn(`[DataStore] Falha ao salvar "${key}" no localStorage.`);
  }
}

export function useDataStore<T extends BaseEntity>(
  key: string,
  defaultData: T[],
): DataStore<T> {
  const [items, setItems] = useState<T[]>(
    () => loadFromStorage<T>(key) ?? defaultData,
  );

  const persist = useCallback(
    (next: T[]) => {
      setItems(next);
      saveToStorage(key, next);
    },
    [key],
  );

  const getById = useCallback(
    (id: string) => items.find((item) => item.id === id),
    [items],
  );

  const add = useCallback(
    (item: T) => {
      persist([...items, item]);
    },
    [items, persist],
  );

  const update = useCallback(
    (id: string, patch: Partial<Omit<T, "id">>) => {
      persist(
        items.map((item) =>
          item.id === id ? ({ ...item, ...patch } as T) : item,
        ),
      );
    },
    [items, persist],
  );

  const remove = useCallback(
    (id: string) => {
      persist(items.filter((item) => item.id !== id));
    },
    [items, persist],
  );

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_PREFIX + key);
    setItems(defaultData);
  }, [key, defaultData]);

  return { items, getById, add, update, remove, reset };
}
