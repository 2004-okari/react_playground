// App.js
import React from 'react';
import './App.css';
import { Parallax } from 'react-scroll-parallax';


const App = () => {
  return (
    <Parallax speed={-10}>
      <header class="header">
        <a href="index.html" class="logo">
            My Logo
        </a>
        <nav class="icon-menu">
            <i class="fa fa-bars" id="icon-1" aria-hidden="true"></i>            
            <ul class="img-1-nav">
                <i  class="fa fa-times" id="close" aria-hidden="true"></i>
                <li class="img-list"><a href="#portfolio" class="reference refer-1">Portfolio</a></li>
                <li class="img-list"><a href="#about" class="reference refer-2">About</a></li>
                <li class="img-list"><a href="#contact" class="reference refer-3">Contact</a></li>
                <li class="img-list"><a href="https://mail.google.com/?" target="_blank" class="reference" rel="noopener"><img src="images/email.svg" alt="email-icon" /></a></li>
            </ul>
        </nav>
    </header>
    <main class="main-content">
        <section class="section-1">
            <article class="article">
                <h1 class="intro">
                    Hello There.
                    I'm Okari.
                </h1>
                <h2 class="job-title">
                    I'm a software developer
                </h2>
                <p class="job-description">
                    I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
                </p>
            </article>
            <ul class="links">
                <li class="socials">
                    <a class="icon-links" href="https://github.com">
                        <img src="images/Icon -GitHub.svg" alt="github-icon" class="image-icons" />
                    </a>
                </li>
                <li class="socials">
                    <a class="icon-links" href="https://linkedin.com">
                        <img src="images/Icon - Linkedin.svg" alt="linkedin-icon" class="image-icons" />
                    </a>
                </li>
                <li class="socials">
                    <a class="icon-links" href="https://angelist.com">
                        <img src="images/Icon - Angelist.svg" alt="angellist-icon" class="image-icons" />
                    </a>
                </li>
                <li class="socials">
                    <a class="icon-links" href="https://twitter.com">
                        <img src="images/Icon - Twitter.svg" alt="twitter-icon" class="image-icons" />
                    </a>
                </li>
                <li class="socials">
                    <a class="icon-links" href="https://medium.com">
                        <img src="images/Icon - Medium.svg" alt="medium-icon" class="image-icons" />
                    </a>
                </li>
            </ul>
        </section>
        <section class="section-2" id="portfolio">
            <article class="recent-article">
                <div class="recent-div">
                    <h2 class="recent-text">My Recent Works</h2>
                    <div class="recent-break"></div>
                </div>
                <div class="img-div">
                    <img src="images/multipost.svg" alt="proj-image" class="recent-img" />
                    <div class="sec-2-div">
                        <h3 class="recent-text-2">Multi-Post Stories</h3>
                        <p class="recent-text-3">
                            A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
                        </p>
                        <ul class="recent-btns">
                            <li class="upper-list"><button class="recent-css-btn">CSS</button></li>
                            <li class="upper-list"><button class="recent-html-btn">HTML</button></li>
                            <li class="upper-list"><button class="recent-bootstrap-btn">Bootstrap</button></li>
                            <li class="upper-list"><button class="recent-ruby-btn">Ruby</button></li>
                        </ul>
                        <button class="recent-see-btn">See project</button>
                    </div>
                </div>
            </article>
        </section>


        <section class="section-3">
            <div class="grid">

            </div>
        </section>



        <section class="section-4" id="about">
            <article class="article-2">
                <h1 class="about-me">About me</h1>
                <p class="about-description">
                    I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.
                </p>
                <button class="about-button">
                    Get my resume
                </button>
            </article>
            <div class="line-break"></div>
            <div class="listings">
                <ul class="article-3">
                    <li class="list-1"><img src="images/Rectangle 55.svg" alt="rect" class="rec-image" />Language</li>
                    <li class="list1">Javascript</li>
                    <li class="list1">Ruby</li>
                    <li class="list1">HTML</li>
                    <li class="list1">CSS</li>
                </ul>
                <ul class="article-4">
                    <li class="list-2"><img src="images/Rectangle 56.svg" alt="rect" class="rec-image" />Frameworks</li>
                    <li class="list2">React.js</li>
                    <li class="list2">Ruby on Rails</li>
                    <li class="list2">RSpec</li>
                    <li class="list2">Capybara</li>
                    <li class="list2">Selenium</li>
                </ul>
                <ul class="article-5">
                    <li class="list-3"><img src="images/Rectangle 57.svg" alt="rect" class="rec-image" />Skills</li>
                    <li class="list3">Database Management</li>
                    <li class="list3">Version Control</li>
                    <li class="list3">CLI</li>
                    <li class="list3">App Design</li>
                    <li class="list3">Web Development</li>
                </ul>
            </div>
        </section>
        <section class="section-5" id="contact">
            <h3 class="contact-text">
                I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
            </h3>
            <form action="https://formspree.io/f/moqzonkv" method="post" class="form-sec">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Full Name" id="name-id" onkeyup="validateName()" />
                    <small class="small-talk" id="name-err"></small>
                </div>
                <div class="seperate-line"></div>
                <div class="form-group-1">
                    <input type="email" name="email" placeholder="Email address" id="email-id" onkeyup="validateEmail()" />
                    <small class="small-talk-1" id="email-err"></small>
                </div>
                <div class="seperate-line"></div>
                <div class="form-group-2">
                    <textarea name="text-area" placeholder="Write me something" id="text-area" rows="5" cols="30" maxlength="500" onkeyup="validateText()"></textarea>
                    <small class="small-talk-2" id="text-err"></small>
                </div>
                <div class="form-group-3">
                    <input type="submit" name="Get in touch" id="submit" value="Get in touch" placeholder="Get in touch" onclick="return validate()" />
                    <small class="small-talk-3" id="submit-err"></small>
                </div>
                <div class="seperate-line-2"></div>
            </form>
        </section>
    </main>
    <footer class="footer-sec">
        <ul class="contact-list">
            <li><a href="https://github.com"><img src="images/git-hub.svg" alt="profile-images" /></a></li>
            <li><a href="https://linkedIn-in.com"><img src="images/linked-in.svg" alt="profile-images" /></a></li>
            <li><a href="https://angelist.com"><img src="images/angelist-ang.svg" alt="profile-images" /></a></li>
            <li><a href="https://twitter.com"><img src="images/tweet.svg" alt="profile-images" /></a></li>
            <li><a href="https://medium.com"><img src="images/med.svg" alt="profile-images" /></a></li>
        </ul>
    </footer>
    </Parallax>
  );    
};

export default App;
