export function PrivacyPolicy() {
  return (
    <div className="privacy">
      <nav className="privacy__nav">
        <div className="container">
          <a href="/" className="nav__logo">
            <img
              src="/assets/conectcore_logo02.png"
              alt="Conectcore"
              className="nav__logo-img"
            />
          </a>
          <a href="/" className="privacy__back">
            ← Voltar ao site
          </a>
        </div>
      </nav>

      <main className="privacy__content">
        <div className="container container--narrow">
          <p className="section-tag">Legal</p>
          <h1 className="privacy__title">Política de Privacidade</h1>
          <p className="privacy__updated">
            Última atualização: 1 de abril de 2026
          </p>

          <section className="privacy__section">
            <h2>1. Introdução</h2>
            <p>
              A <strong>Conectcore Engenharia de Software Ltda.</strong>{" "}
              (&ldquo;Conectcore&rdquo;, &ldquo;nós&rdquo;,
              &ldquo;nosso&rdquo;) valoriza a privacidade dos usuários de nossos
              aplicativos, sites e serviços (coletivamente,
              &ldquo;Serviços&rdquo;). Esta Política de Privacidade descreve
              como coletamos, usamos, armazenamos, compartilhamos e protegemos
              suas informações pessoais, em conformidade com a Lei Geral de
              Proteção de Dados (LGPD — Lei nº 13.709/2018), o Regulamento
              Geral de Proteção de Dados da União Europeia (GDPR), as políticas
              do Google Play e da Apple App Store.
            </p>
            <p>
              Ao utilizar nossos Serviços, você concorda com as práticas
              descritas nesta política. Se não concordar, por favor, não utilize
              nossos Serviços.
            </p>
          </section>

          <section className="privacy__section">
            <h2>2. Dados que Coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações, dependendo do
              Serviço utilizado:
            </p>

            <h3>2.1 Informações fornecidas por você</h3>
            <ul>
              <li>
                <strong>Dados de cadastro:</strong> nome, endereço de e-mail,
                número de telefone, empresa/organização.
              </li>
              <li>
                <strong>Dados de contato:</strong> informações enviadas via
                formulários de contato ou atendimento ao cliente.
              </li>
              <li>
                <strong>Conteúdo do usuário:</strong> textos, imagens, arquivos
                ou qualquer conteúdo que você envie através dos nossos Serviços.
              </li>
            </ul>

            <h3>2.2 Informações coletadas automaticamente</h3>
            <ul>
              <li>
                <strong>Dados de uso:</strong> interações com o aplicativo
                (cliques, visualizações de tela, tempo de uso, funcionalidades
                acessadas).
              </li>
              <li>
                <strong>Dados do dispositivo:</strong> modelo do dispositivo,
                sistema operacional, versão do app, identificadores únicos do
                dispositivo, idioma, fuso horário.
              </li>
              <li>
                <strong>Dados de diagnóstico:</strong> logs de erros (crash
                logs), dados de performance, tempo de carregamento.
              </li>
              <li>
                <strong>Endereço IP:</strong> utilizado para segurança,
                prevenção de fraudes e localização aproximada (cidade/região).
              </li>
            </ul>

            <h3>2.3 Informações de terceiros</h3>
            <ul>
              <li>
                <strong>Serviços de login social:</strong> se você optar por
                autenticação via Google, Apple ou outro provedor, recebemos o
                nome, e-mail e foto de perfil fornecidos pelo provedor.
              </li>
              <li>
                <strong>SDKs e serviços integrados:</strong> ferramentas de
                analytics (ex: Google Analytics, Firebase), push notifications e
                serviços de infraestrutura podem coletar dados conforme suas
                próprias políticas de privacidade.
              </li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>3. Como Usamos os Dados</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>
                <strong>Prestação de serviço:</strong> operar, manter e
                melhorar nossos Serviços, incluindo autenticação,
                personalização e suporte ao cliente.
              </li>
              <li>
                <strong>Comunicações:</strong> enviar notificações sobre
                atualizações, alertas de segurança e mensagens de suporte.
              </li>
              <li>
                <strong>Analytics:</strong> entender como os usuários utilizam
                nossos Serviços para melhorar a experiência, planejar novos
                recursos e medir o desempenho.
              </li>
              <li>
                <strong>Segurança:</strong> detectar, prevenir e combater
                fraudes, abusos e atividades ilegais.
              </li>
              <li>
                <strong>Obrigações legais:</strong> cumprir leis, regulamentos,
                processos judiciais ou solicitações governamentais aplicáveis.
              </li>
            </ul>
            <p>
              <strong>Não utilizamos</strong> seus dados pessoais para
              publicidade direcionada de terceiros (third-party advertising), a
              menos que haja consentimento explícito.
            </p>
          </section>

          <section className="privacy__section">
            <h2>4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos ou comercializamos seus dados pessoais.
              Podemos compartilhar informações nas seguintes circunstâncias:
            </p>
            <ul>
              <li>
                <strong>Prestadores de serviço:</strong> compartilhamos dados
                com provedores de infraestrutura (AWS, Google Cloud, Vercel),
                analytics (Firebase, Google Analytics) e comunicação (serviços
                de e-mail) que processam dados em nosso nome, sob contratos que
                garantem a proteção adequada.
              </li>
              <li>
                <strong>Obrigação legal:</strong> quando exigido por lei, ordem
                judicial, ou para proteger direitos, propriedade ou segurança da
                Conectcore e de seus usuários.
              </li>
              <li>
                <strong>Transferência de negócios:</strong> em caso de fusão,
                aquisição ou venda de ativos, os dados poderão ser transferidos
                mediante notificação prévia.
              </li>
              <li>
                <strong>Com seu consentimento:</strong> em qualquer outra
                situação, somente com sua autorização expressa.
              </li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>5. Armazenamento e Segurança</h2>
            <ul>
              <li>
                Os dados são armazenados em servidores seguros utilizando
                criptografia em trânsito (TLS/SSL) e em repouso (AES-256).
              </li>
              <li>
                Adotamos medidas técnicas e organizacionais para proteger seus
                dados contra acesso não autorizado, alteração, divulgação ou
                destruição, incluindo controle de acesso, monitoramento e
                auditorias regulares.
              </li>
              <li>
                Os dados são retidos apenas pelo tempo necessário para cumprir
                as finalidades descritas nesta política ou conforme exigido por
                lei.
              </li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>6. Transferência Internacional de Dados</h2>
            <p>
              Seus dados podem ser processados em servidores localizados fora do
              Brasil, incluindo Estados Unidos e União Europeia. Nesses casos,
              garantimos que os dados estejam protegidos por cláusulas
              contratuais padrão ou outros mecanismos de transferência aprovados
              pela ANPD (Autoridade Nacional de Proteção de Dados) e/ou conforme
              o GDPR.
            </p>
          </section>

          <section className="privacy__section">
            <h2>7. Seus Direitos</h2>
            <p>
              Conforme a LGPD e o GDPR, você possui os seguintes direitos sobre
              seus dados pessoais:
            </p>
            <ul>
              <li>
                <strong>Acesso:</strong> solicitar quais dados pessoais mantemos
                sobre você.
              </li>
              <li>
                <strong>Correção:</strong> solicitar a correção de dados
                incompletos, inexatos ou desatualizados.
              </li>
              <li>
                <strong>Exclusão:</strong> solicitar a exclusão dos seus dados
                pessoais, exceto quando houver obrigação legal de retenção.
              </li>
              <li>
                <strong>Portabilidade:</strong> solicitar a transferência dos
                seus dados para outro provedor de serviço.
              </li>
              <li>
                <strong>Revogação de consentimento:</strong> retirar o
                consentimento a qualquer momento, sem afetar a licitude do
                tratamento anterior.
              </li>
              <li>
                <strong>Oposição:</strong> opor-se ao tratamento de dados para
                finalidades específicas.
              </li>
              <li>
                <strong>Informação sobre compartilhamento:</strong> saber com
                quais entidades seus dados foram compartilhados.
              </li>
            </ul>
            <p>
              Para exercer qualquer desses direitos, entre em contato conosco
              pelo e-mail:{" "}
              <a href="mailto:privacidade@conectcore.com.br">
                privacidade@conectcore.com.br
              </a>
            </p>
          </section>

          <section className="privacy__section">
            <h2>8. Dados de Crianças</h2>
            <p>
              Nossos Serviços não são direcionados a menores de 13 anos (ou a
              idade mínima aplicável em sua jurisdição). Não coletamos
              intencionalmente dados pessoais de crianças. Se tomarmos
              conhecimento de que coletamos dados de uma criança sem o
              consentimento dos pais ou responsáveis, tomaremos medidas para
              excluir essas informações imediatamente. Se você é pai/mãe ou
              responsável e acredita que seu filho nos forneceu dados pessoais,
              entre em contato conosco.
            </p>
          </section>

          <section className="privacy__section">
            <h2>9. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Nosso site e aplicativos podem utilizar cookies e tecnologias
              similares para:
            </p>
            <ul>
              <li>Manter sua sessão ativa e preferências salvas.</li>
              <li>Analisar o uso dos Serviços (analytics).</li>
              <li>Melhorar a performance e a experiência do usuário.</li>
            </ul>
            <p>
              Você pode controlar o uso de cookies através das configurações do
              seu navegador. Note que desabilitar cookies pode afetar a
              funcionalidade de alguns Serviços.
            </p>
          </section>

          <section className="privacy__section">
            <h2>10. SDKs de Terceiros e Integrações</h2>
            <p>
              Nossos aplicativos podem integrar SDKs de terceiros que coletam
              dados conforme suas próprias políticas de privacidade. Os
              principais incluem:
            </p>
            <ul>
              <li>
                <strong>Google Firebase:</strong> analytics, crash reporting e
                push notifications.
              </li>
              <li>
                <strong>Google Analytics:</strong> análise de tráfego e
                comportamento de uso.
              </li>
              <li>
                <strong>Sentry:</strong> monitoramento de erros e performance.
              </li>
              <li>
                <strong>Stripe:</strong> processamento seguro de pagamentos (os
                dados de pagamento são processados diretamente pela Stripe e não
                são armazenados pela Conectcore).
              </li>
            </ul>
            <p>
              Recomendamos a leitura das políticas de privacidade de cada
              provedor para mais detalhes.
            </p>
          </section>

          <section className="privacy__section">
            <h2>11. Retenção de Dados</h2>
            <ul>
              <li>
                <strong>Dados da conta:</strong> retidos enquanto sua conta
                estiver ativa. Após exclusão, os dados são removidos em até 30
                dias, exceto quando a retenção for exigida por lei.
              </li>
              <li>
                <strong>Dados de uso e analytics:</strong> retidos por até 26
                meses em formato agregado/anonimizado.
              </li>
              <li>
                <strong>Dados de diagnóstico:</strong> retidos por até 90 dias.
              </li>
              <li>
                <strong>Backups:</strong> removidos automaticamente após 90 dias
                da exclusão dos dados originais.
              </li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2>12. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Quando fizermos alterações significativas, notificaremos você por
              meio de um aviso em nossos Serviços ou por e-mail. A data da
              &ldquo;última atualização&rdquo; no topo desta página indica
              quando a política foi revisada pela última vez.
            </p>
            <p>
              O uso continuado dos Serviços após as alterações constituirá
              aceitação da política atualizada.
            </p>
          </section>

          <section className="privacy__section">
            <h2>13. Contato</h2>
            <p>
              Se você tiver dúvidas, preocupações ou solicitações relacionadas a
              esta Política de Privacidade ou ao tratamento dos seus dados
              pessoais, entre em contato:
            </p>
            <div className="privacy__contact-card">
              <p>
                <strong>Conectcore Engenharia de Software Ltda.</strong>
              </p>
              <p>
                E-mail:{" "}
                <a href="mailto:privacidade@conectcore.com.br">
                  privacidade@conectcore.com.br
                </a>
              </p>
              <p>
                Site:{" "}
                <a
                  href="https://conectcore.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  conectcore.com.br
                </a>
              </p>
            </div>
            <p>
              Responderemos à sua solicitação dentro de 15 (quinze) dias úteis,
              conforme previsto pela LGPD.
            </p>
          </section>

          <section className="privacy__section">
            <h2>14. Base Legal para o Tratamento (LGPD/GDPR)</h2>
            <table className="privacy__table">
              <thead>
                <tr>
                  <th>Finalidade</th>
                  <th>Base Legal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Prestação de serviço e funcionamento do app</td>
                  <td>Execução de contrato (Art. 7º, V — LGPD)</td>
                </tr>
                <tr>
                  <td>Analytics e melhoria dos Serviços</td>
                  <td>Legítimo interesse (Art. 7º, IX — LGPD)</td>
                </tr>
                <tr>
                  <td>Comunicações de marketing</td>
                  <td>Consentimento (Art. 7º, I — LGPD)</td>
                </tr>
                <tr>
                  <td>Segurança e prevenção de fraudes</td>
                  <td>Legítimo interesse (Art. 7º, IX — LGPD)</td>
                </tr>
                <tr>
                  <td>Obrigações legais</td>
                  <td>Cumprimento de obrigação legal (Art. 7º, II — LGPD)</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>

      <footer className="privacy__footer">
        <div className="container">
          <p>© 2026 Conectcore. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
