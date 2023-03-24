import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'

import Banner from './banner'
import Branding from './branding'
import Steps from './steps'
import IconContainer from './icon-container'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Banner></Banner>
      <section className={styles['hero']}>
        <div className={styles['main']}>
          <div className={styles['content']}>
            <header
              data-thq="thq-navbar"
              className={styles['navbar-interactive']}
            >
              <Branding rootClassName="root-class-name1"></Branding>
              <div
                data-thq="thq-navbar-nav"
                data-role="Nav"
                className={styles['desktop-menu']}
              >
                <div className={styles['links']}>
                  <Link
                    to="/home"
                    className={` ${styles['link']} ${projectStyles['nav-link']} `}
                  >
                    Mission
                  </Link>
                  <Link
                    to="/home"
                    className={` ${styles['link01']} ${projectStyles['nav-link']} `}
                  >
                    Take Action
                  </Link>
                  <Link
                    to="/home"
                    className={` ${styles['link02']} ${projectStyles['nav-link']} `}
                  >
                    News
                  </Link>
                  <Link
                    to="/home"
                    className={` ${styles['link03']} ${projectStyles['nav-link']} `}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
                <button className={projectStyles['button']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className={styles['nav']}
                >
                  <div className={styles['container1']}>
                    <Branding rootClassName="root-class-name"></Branding>
                    <div
                      data-thq="thq-close-menu"
                      className={styles['menu-close']}
                    >
                      <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className={styles['links1']}>
                    <Link
                      to="/home"
                      className={` ${styles['link04']} ${projectStyles['nav-link']} `}
                    >
                      Mission
                    </Link>
                    <Link
                      to="/home"
                      className={` ${styles['link05']} ${projectStyles['nav-link']} `}
                    >
                      Take Action
                    </Link>
                    <Link
                      to="/home"
                      className={` ${styles['link06']} ${projectStyles['nav-link']} `}
                    >
                      News
                    </Link>
                    <Link
                      to="/home"
                      className={` ${styles['link07']} ${projectStyles['nav-link']} `}
                    >
                      Contact
                    </Link>
                  </div>
                  <div className={styles['icon-group']}>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className={styles['icon04']}
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className={styles['icon06']}
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className={styles['icon08']}
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </header>
            <div className={styles['hero-section']}>
              <div className={styles['header']}>
                <h1 className={styles['heading']}>You can make a difference</h1>
                <p className={styles['caption']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className={styles['buttons']}>
                <button className={projectStyles['button']}>
                  <span>Donate Now</span>
                </button>
                <button
                  className={` ${styles['button02']} ${projectStyles['button']} `}
                >
                  <span>Join our newsletter</span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles['image']}>
            <button
              className={` ${projectStyles['button']} ${styles['button03']} `}
            >
              Donate
            </button>
          </div>
        </div>
        <div className={styles['details-container']}>
          <div className={styles['details']}>
            <div className={styles['category']}>
              <img
                alt="image"
                src="/playground_assets/details-1.svg"
                className={styles['image01']}
              />
              <p className={styles['text02']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className={styles['category1']}>
              <img
                alt="image"
                src="/playground_assets/details-2.svg"
                className={styles['image02']}
              />
              <p className={styles['text03']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className={styles['category2']}>
              <img
                alt="image"
                src="/playground_assets/details-3.svg"
                className={styles['image03']}
              />
              <p className={styles['text04']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['mission']}>
        <div className={styles['content01']}>
          <div className={styles['main1']}>
            <span className={styles['title']}>Our Mission</span>
            <div className={styles['header01']}>
              <h2 className={styles['heading01']}>
                Hepa has been working to free animals from cruelty and
                institutionalized exploitation around the world.
              </h2>
              <p className={styles['caption01']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className={styles['highlights']}>
            <div className={styles['highlight']}>
              <h3 className={styles['title1']}>Action</h3>
              <p className={styles['description']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className={styles['highlight1']}>
              <h3 className={styles['title2']}>Help</h3>
              <p className={styles['description1']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className={styles['images']}>
          <img
            alt="image"
            src="/playground_assets/mission-1-400w.png"
            className={styles['image04']}
          />
          <div className={styles['row']}>
            <img
              alt="image"
              src="/playground_assets/mission-2-400w.png"
              className={styles['image05']}
            />
          </div>
        </div>
      </section>
      <section className={styles['petitions']}>
        <div className={styles['images1']}>
          <img
            alt="image"
            src="/playground_assets/petition-1400w.png"
            className={styles['image06']}
          />
        </div>
        <div className={styles['content02']}>
          <div className={styles['main2']}>
            <div className={styles['header02']}>
              <h2 className={styles['heading02']}>
                Sign our petitions and make your voice heard for the animals
                that need your help.
              </h2>
              <p className={styles['caption02']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
          <div className={styles['button04']}>
            <button className={projectStyles['button']}>
              <span>Sign petition</span>
            </button>
          </div>
        </div>
      </section>
      <section className={styles['steps']}>
        <div className={styles['content03']}>
          <div className={styles['information']}>
            <div className={styles['main3']}>
              <div className={styles['header03']}>
                <h2 className={styles['heading03']}>
                  Making a difference lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod.
                </h2>
                <p className={styles['caption03']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className={styles['button06']}>
              <button className={projectStyles['button']}>
                <span>Take action</span>
              </button>
            </div>
          </div>
          <Steps></Steps>
        </div>
      </section>
      <section className={styles['help']}>
        <div className={styles['help-content']}>
          <div className={styles['header04']}>
            <h2 className={styles['heading04']}>How can you help</h2>
            <p className={styles['caption04']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className={styles['switch']}>
            <div
              id="individual"
              className={` ${projectStyles['switch-active']} ${projectStyles['switch']} `}
            >
              <span>Individuals</span>
            </div>
            <div id="company" className={projectStyles['switch']}>
              <span>Companies</span>
            </div>
          </div>
        </div>
        <div className={styles['content04']}>
          <div id="individuals-content" className={styles['save']}>
            <div className={styles['content05']}>
              <div className={styles['main4']}>
                <div className={styles['header05']}>
                  <h2 className={styles['heading05']}>
                    This is the Individuals Tab
                  </h2>
                  <p className={styles['caption05']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className={styles['highlights1']}>
                  <div className={styles['highlight2']}>
                    <h3 className={styles['title3']}>60%</h3>
                    <p className={styles['description2']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className={styles['highlight3']}>
                    <h3 className={styles['title4']}>40%</h3>
                    <p className={styles['description3']}>
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles['button08']}>
                <button className={projectStyles['button']}>
                  <span>Take action</span>
                </button>
                <button className={projectStyles['button']}>
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className={styles['images2']}>
              <img
                alt="image"
                src="/playground_assets/help-1400w.png"
                className={styles['image07']}
              />
            </div>
          </div>
          <div id="companies-content" className={styles['companies']}>
            <div className={styles['content06']}>
              <div className={styles['main5']}>
                <div className={styles['header06']}>
                  <h2 className={styles['heading06']}>
                    This is the Companies Tab
                  </h2>
                  <p className={styles['caption06']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className={styles['highlights2']}>
                  <div className={styles['highlight4']}>
                    <h3 className={styles['title5']}>55%</h3>
                    <p className={styles['description4']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className={styles['highlight5']}>
                    <h3 className={styles['title6']}>45%</h3>
                    <p className={styles['description5']}>
                      Excepteur sint occaecat cupidatat non proident
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles['button11']}>
                <button className={projectStyles['button']}>
                  <span>Take action</span>
                </button>
                <button className={projectStyles['button']}>
                  <span>Learn more</span>
                </button>
              </div>
            </div>
            <div className={styles['images3']}>
              <img
                alt="image"
                src="/playground_assets/help-1400w.png"
                className={styles['image08']}
              />
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
document.getElementById("individual").addEventListener("click", function() {
  document.getElementById("individuals-content").style.display = "flex";
  document.getElementById("companies-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("company").classList.remove("switch-active");
});
document.getElementById("company").addEventListener("click", function() {
  document.getElementById("companies-content").style.display = "flex";
  document.getElementById("individuals-content").style.display = "none";
  this.classList.add("switch-active");
  document.getElementById("individual").classList.remove("switch-active");
});
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className={styles['quote-one']}>
        <div className={styles['quote-content']}>
          <h2 className={styles['quote']}>
            “Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.”
          </h2>
          <div className={styles['quoted']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxwb3RyYWl0fGVufDB8fHx8MTY3MDkyNjgxNQ&amp;ixlib=rb-4.0.3&amp;w=200"
              className={styles['image09']}
            />
            <p className={styles['caption07']}>Michael Belfort, @helpa</p>
          </div>
        </div>
      </section>
      <section className={styles['quote-two']}>
        <div className={styles['content07']}>
          <div className={styles['video']}>
            <video
              src
              poster="/playground_assets/video-1400w.png"
              className={styles['video1']}
            ></video>
            <div className={styles['play']}>
              <div className={styles['button14']}>
                <svg
                  viewBox="0 0 808.5942857142857 1024"
                  className={styles['icon10']}
                >
                  <path d="M790.857 529.714l-758.857 421.714c-17.714 9.714-32 1.143-32-18.857v-841.143c0-20 14.286-28.571 32-18.857l758.857 421.714c17.714 9.714 17.714 25.714 0 35.429z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className={styles['quote-content1']}>
            <h2 className={styles['quote1']}>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </h2>
            <div className={styles['quoted1']}>
              <p className={styles['caption08']}>Andrew Gonzalez</p>
              <p className={styles['caption09']}>@ihelpyou</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles['donate']}>
        <div className={styles['content08']}>
          <div className={styles['header07']}>
            <span className={styles['heading07']}>
              Donate now and help us help animals
            </span>
            <span className={styles['caption10']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </span>
          </div>
          <div className={styles['amount']}>
            <div className={styles['row1']}>
              <button
                className={` ${styles['button15']} ${projectStyles['button']} `}
              >
                $5
              </button>
              <button
                className={` ${styles['button16']} ${projectStyles['button']} `}
              >
                $10
              </button>
            </div>
            <div className={styles['row2']}>
              <button
                className={` ${styles['button17']} ${projectStyles['button']} `}
              >
                $20
              </button>
              <button
                className={` ${styles['button18']} ${projectStyles['button']} `}
              >
                $40
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className={styles['donation-use']}>
        <div className={styles['header08']}>
          <h2 className={styles['heading08']}>
            Your donations will be used to help animals.
          </h2>
          <p className={styles['caption11']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className={styles['accordion']}>
          <div
            data-role="accordion-container"
            className={` ${projectStyles['accordion-element']} ${styles['element']} `}
          >
            <div className={styles['header09']}>
              <h3 className={styles['text13']}>
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="root-class-name4"></IconContainer>
            </div>
            <div
              data-role="accordion-content"
              className={projectStyles['accordion-content']}
            >
              <p className={styles['text14']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className={` ${projectStyles['accordion-element']} ${styles['element1']} `}
          >
            <div className={styles['header10']}>
              <h3 className={styles['text15']}>
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="root-class-name5"></IconContainer>
            </div>
            <div
              data-role="accordion-content"
              className={projectStyles['accordion-content']}
            >
              <p className={styles['text16']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className={` ${projectStyles['accordion-element']} ${styles['element2']} `}
          >
            <div className={styles['header11']}>
              <h3 className={styles['text17']}>
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="root-class-name6"></IconContainer>
            </div>
            <div
              data-role="accordion-content"
              className={projectStyles['accordion-content']}
            >
              <p className={styles['text18']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className={` ${projectStyles['accordion-element']} ${styles['element3']} `}
          >
            <div className={styles['header12']}>
              <h3 className={styles['text19']}>
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="root-class-name7"></IconContainer>
            </div>
            <div
              data-role="accordion-content"
              className={projectStyles['accordion-content']}
            >
              <p className={styles['text20']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className={` ${projectStyles['accordion-element']} ${styles['element4']} `}
          >
            <div className={styles['header13']}>
              <h3 className={styles['text21']}>
                Lorem ipsum dolor sit ametna aliqua.
              </h3>
              <IconContainer rootClassName="root-class-name8"></IconContainer>
            </div>
            <div
              data-role="accordion-content"
              className={projectStyles['accordion-content']}
            >
              <p className={styles['text22']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></DangerousHTML>
          </div>
        </div>
      </section>
      <section className={styles['updates']}>
        <div className={styles['content14']}>
          <div className={styles['details1']}>
            <div className={styles['header14']}>
              <h2 className={styles['heading09']}>
                Get updates and action alerts from Helpa by joining our
                newsletter
              </h2>
              <p className={styles['caption12']}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className={styles['action']}>
              <div className={styles['input']}>
                <input
                  type="text"
                  placeholder="Email address"
                  className={` ${styles['textinput']} ${projectStyles['input']} `}
                />
                <button
                  className={` ${projectStyles['button']} ${styles['button19']} `}
                >
                  Subscribe
                </button>
              </div>
              <div className={styles['agreement']}>
                <div className={styles['states']}>
                  <div id="tos" className={styles['checkbox']}></div>
                  <div id="tos-active" className={styles['checkbox1']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                      <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles['caption13']}>
                  <label htmlFor="tos" className={styles['normal']}>
                    I agree to the
                  </label>
                  <label htmlFor="tos" className={styles['bold']}>
                    Terms and Conditions
                  </label>
                </div>
                <div>
                  <DangerousHTML
                    html={`<script>
// Create a boolean to represent the state of the toggle
let tosToggle = false;

// Add event listeners to the divs and labels
document.getElementById("tos").addEventListener("click", toggleTos);
document.getElementById("tos-active").addEventListener("click", toggleTos);
document.querySelectorAll("label[for=tos]").forEach(label => label.addEventListener("click", toggleTos));

// Define the toggleTos function to hide/show the elements based on the state of the toggle
function toggleTos() {
  if (tosToggle) {
    document.getElementById("tos").style.display = "flex";
    document.getElementById("tos-active").style.display = "none";
  } else {
    document.getElementById("tos").style.display = "none";
    document.getElementById("tos-active").style.display = "flex";
  }
  tosToggle = !tosToggle;
}
</script>`}
                  ></DangerousHTML>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['slider']}>
            <div className={styles['slides']}>
              <div
                className={` ${projectStyles['slide-active']} ${projectStyles['slide']} `}
              >
                <img
                  alt="image"
                  src="/playground_assets/slide-1-1400w.png"
                  className={styles['image10']}
                />
                <span className={styles['text23']}>
                  WFH One year on. Here’s what we’ve learned.
                </span>
              </div>
              <div className={projectStyles['slide']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670991761566-534b07539db5?ixid=Mnw5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className={styles['image11']}
                />
                <span className={styles['text24']}>
                  <span>This is a test slide</span>
                  <br></br>
                </span>
              </div>
              <div className={projectStyles['slide']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1670087670280-7a3e71a7efa6?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY3MTAxNTg5Ng&amp;ixlib=rb-4.0.3&amp;w=1400"
                  className={styles['image12']}
                />
                <span className={styles['text27']}>
                  <span>This one also!</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className={styles['buttons-container']}>
              <div className={styles['buttons1']}>
                <button
                  id="previous-slide"
                  className={` ${styles['previous']} ${projectStyles['button']} `}
                >
                  <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                    <path d="M32 512l480 480v-288h512v-384h-512v-288z"></path>
                  </svg>
                </button>
                <button
                  id="next-slide"
                  className={` ${styles['next']} ${projectStyles['button']} `}
                >
                  <svg viewBox="0 0 1024 1024" className={styles['icon16']}>
                    <path d="M992 512l-480-480v288h-512v384h512v288z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={styles['top']}>
          <Branding></Branding>
          <nav className={styles['navigation-links']}>
            <Link
              to="/home"
              className={` ${styles['link08']} ${projectStyles['nav-link']} `}
            >
              Mission
            </Link>
            <Link
              to="/home"
              className={` ${styles['link09']} ${projectStyles['nav-link']} `}
            >
              Take Action
            </Link>
            <Link
              to="/home"
              className={` ${styles['link10']} ${projectStyles['nav-link']} `}
            >
              News
            </Link>
            <Link
              to="/home"
              className={` ${styles['link11']} ${projectStyles['nav-link']} `}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className={styles['middle']}>
          <span className={styles['text30']}>
            +0 222.345.987 office@helpa.template
          </span>
          <span className={styles['text31']}>
            Forge Co.13G Eagle Blvd.Nashville, TN 37011-5678
          </span>
        </div>
        <div className={styles['bottom']}>
          <span className={styles['copyright']}>
            © Copyright Company – 2022
          </span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home

