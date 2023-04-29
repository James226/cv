function App() {

  return (
    <>
      <div className="c-navigation">
        <a href="https://github.com/James226" target="_blank">Github</a>&nbsp;|&nbsp;
        <a
          href="https://www.linkedin.com/in/james-parker-021058147/"
          target="_blank"
          >LinkedIn</a>
        <a href="https://james-parker.dev" target="_blank" className="u-visible@print"> | james-parker.dev</a>
      </div>
      <div className="c-header">
        <div className="c-header__titlecontainer">
          <div className="c-header__title">
            <div>James</div>
            <div>Parker</div>
          </div>
          <div className="c-header__subtitle">
            Developer • Tech Evangelist • London
          </div>
        </div>
      </div>
      <div className="o-wrapper">
        <div className="c-grid">
          <div className="c-grid__column u-clearfix u-page-break">
            <div className="c-card">
              <h2>About me</h2>
              <p>
                I enjoy the challenge of programming; creating workable
                applications for various types of criteria. Not knowing
                a language isn't a hindrance - it's an <strong>opportunity to learn</strong>. From
                gaming to web apps to mobile apps, I have tried my hand at
                anything I can and have enjoyed myself along the way.
              </p>
              <p>
                When I'm not programming at work, I'm programming at home. Gaming
                is a passion of mine and so I often spend hours creating addons
                for other people around the world to use. At the moment, I am
                maintaining four different addons for the MMORPG Wildstar,
                servicing over 750,000 downloads to date, as well as dabbling in a
                voxel based browser game, and a VR based space game.
              </p>
              <p>
                I have a <strong>passion for new technology</strong>
                and enjoy researching in my spare time. Coding software using things such as event stores to aid
                auditability within apps, Reactive Extensions and tools like <strong>
                Docker, Concourse and TinkerPop</strong>, which I can look back on if the
                need ever arises at work.
              </p>
            </div>

            <div className="c-card" style={({overflow: 'auto'})}>
              <h2>Skills</h2>
              
              <div className="c-skills">
                
                <div className="c-skills__item">C#</div>
                
                <div className="c-skills__item">Golang</div>
                
                <div className="c-skills__item">Javascript</div>
                
                <div className="c-skills__item">Kotlin</div>
                
                <div className="c-skills__item">Java</div>
                
                <div className="c-skills__item">Swift</div>
                
                <div className="c-skills__item">C++</div>
                
              </div>
              
              <div className="c-skills">
                
                <div className="c-skills__item">Visual Studio</div>
                
                <div className="c-skills__item">Intellij</div>
                
                <div className="c-skills__item">VSCode</div>
                
                <div className="c-skills__item">Git</div>
                
                <div className="c-skills__item">Jira</div>
                
                <div className="c-skills__item">Jenkins</div>
                
                <div className="c-skills__item">Azure Devops</div>
                
              </div>
              
              <div className="c-skills">
                
                <div className="c-skills__item">.Net Core</div>
                
                <div className="c-skills__item">Android</div>
                
                <div className="c-skills__item">React</div>
                
                <div className="c-skills__item">iOS</div>
                
                <div className="c-skills__item">Linux</div>
                
              </div>
              
              <div className="c-skills">
                
                <div className="c-skills__item">SQL Server</div>
                
                <div className="c-skills__item">MySQL</div>
                
                <div className="c-skills__item">Kafka</div>
                
                <div className="c-skills__item">RabbitMQ</div>
                
                <div className="c-skills__item">InfluxDB</div>
                
                <div className="c-skills__item">Elasticsearch</div>
                
              </div>
              
              <div className="c-skills">
                
                <div className="c-skills__item">AWS</div>
                
                <div className="c-skills__item">GCP</div>
                
                <div className="c-skills__item">Azure</div>
                
                <div className="c-skills__item">Docker</div>
                
                <div className="c-skills__item">Kubernetes</div>
                
                <div className="c-skills__item">Terraform</div>
                
              </div>
              
              <div className="c-skills">
                
                <div className="c-skills__item">Agile</div>
                
                <div className="c-skills__item">Pair Programming</div>
                
                <div className="c-skills__item">TDD</div>
                
                <div className="c-skills__item">CI</div>
                
                <div className="c-skills__item">CD</div>
                
              </div>
              
            </div>
            <div className="c-card">
              <h2>Education</h2>
              <div className="u-right">2007 - 2011</div>
              University of Derby
              <p>BSc Hons Computer Games Programming</p>
            </div>
          </div>
          <div className="c-grid__column">
            <div className="c-card">
              <h2>Professional</h2>

              <div className="c-role">
                <h3>The Body Shop</h3>
                <h5>
                  <div className="u-right">October 2021 - Present</div>
                  Tech Lead
                </h5>
                <ul>
                  <li>Responsible for primary digital platforms including eCommerce & The Body Shop at Home.</li>
                  <li>Recruited & managed <strong>first</strong> in-house dev teams for the company.</li>
                </ul>

                <div>
                  <div className="c-skills" style={({overflow: 'auto'})}>
                    <div className="c-skills__item u-bold">Primary Stack:</div>
                    <div className="c-skills__item">C#</div>
                    <div className="c-skills__item">Java</div>
                    <div className="c-skills__item">MSSQL</div>
                    <div className="c-skills__item">Azure</div>
                    <div className="c-skills__item">Docker</div>
                  </div>
                </div>
              </div>

              <div className="c-role">
                <h3>Sainsbury's Tech</h3>
                <h5>
                  <div className="u-right">August 2016 - October 2021</div>
                  Principal Software Engineer
                </h5>
                <ul>
                  <li>Implemented cloud devops model for the domain, leveraging Kubernetes, Alerting & GitOps.</li>
                  <li>Lead team of senior developers responsible for defining development principles.</li>
                  <li>Architecture & development of a stock system processing ~40 million transactions / day.</li>
                  <li>Simplification of domain architecture using microservices, driving capabilities over products.</li>
                  <li>Rallied for the use of .net core & Docker to help improve the integration with the infradev team & dramatically reduce the infrastructure costs of products.</li>
                  <li>Introduced CQRS event sourcing model to simplify application architecture.</li>
                  <li>Drove adoption of unit & integration testing within applications, encouraging teams to adopt test driven development (TDD).</li>
                  <li>Led on decision & implementation of migration from Windows EC2 to a fully dockerized linux ecosystem across both Azure & AWS using kubernetes.</li>
                </ul>

                <div>
                  <div className="c-skills" style={({overflow: 'auto'})}>
                    <div className="c-skills__item u-bold">Primary Stack:</div>
                    <div className="c-skills__item">C#</div>
                    <div className="c-skills__item">Kotlin</div>
                    <div className="c-skills__item">MSSQL</div>
                    <div className="c-skills__item">AWS</div>
                    <div className="c-skills__item">Docker</div>
                    <div className="c-skills__item">Kafka</div>
                  </div>
                </div>
              </div>

              <div className="c-role">
                <h3>Esendex</h3>
                <h5>
                  <div className="u-right">June 2014 - August 2016</div>
                  Developer
                </h5>
                <ul>
                  <li>Member of messaging team at an agile .net shop, responsible for ~4 million SMS / day.</li>
                  <li>Wrote and maintained the backend & monitoring of the system to achieve maximum throughput to our suppliers, with an extensive
                    suite of automated tests.</li>
                  <li>Led a small agile team to produce a monitoring solution for our clients, with effective WoW.</li>
                </ul>


                <div>
                  <div className="c-skills" style={({overflow: 'auto'})}>
                    <div className="c-skills__item u-bold">Primary Stack:</div>
                    <div className="c-skills__item">Java</div>
                    <div className="c-skills__item">C#</div>
                    <div className="c-skills__item">MSSQL</div>
                    <div className="c-skills__item">Graphite</div>
                    <div className="c-skills__item">RabbitMQ</div>
                  </div>
                </div>
              </div>

              <div className="c-role">
                <h3>Red Box Recorders</h3>
                <h5>
                  <div className="u-right">March 2012 - June 2014</div>
                  Software Developer
                </h5>
                <ul>
                  <li>Developed telephone recording solutions including Motorola Police Radio & Skype.</li>
                  <li>Introduced Jenkins to allow us to get closer to continuous integration.</li>
                </ul>

                <div>
                  <div className="c-skills" style={({overflow: 'auto'})}>
                    <div className="c-skills__item u-bold">Primary Stack:</div>
                    <div className="c-skills__item">C++</div>
                    <div className="c-skills__item">C#</div>
                    <div className="c-skills__item">Python</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
