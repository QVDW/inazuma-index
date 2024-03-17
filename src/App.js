import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

import Home from './Home';
import Players from './Players';
import Builder from './Builder';
import Moves from './Moves';
import News from './News';
import Error from './Error';


import './App.css';
import Logo from './img/icon.png';

function App() {
  return (
      <BrowserRouter>
          <header>
              <div id="logo">
                  <NavLink to="/" title="Homepage"><img src={Logo} alt="Inazuma index logo" /></NavLink>
              </div>
                <nav>
                  <ul>
                    <li><NavLink to="/" title="Homepage"><svg width="40px" height="40px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" stroke="#474747"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M .6249 27.8242 C .6249 28.9492 1.5155 29.6289 2.6171 29.6289 C 3.2968 29.6289 3.8358 29.3008 4.3046 28.8320 L 27.1796 7.9961 C 27.4374 7.7383 27.7187 7.6445 28.0233 7.6445 C 28.3046 7.6445 28.5624 7.7383 28.8436 7.9961 L 51.6954 28.8320 C 52.1874 29.3008 52.7264 29.6289 53.3826 29.6289 C 54.4842 29.6289 55.3751 28.9492 55.3751 27.8242 C 55.3751 27.1211 55.1173 26.6758 54.6719 26.2774 L 46.5623 18.8945 L 46.5623 5.0430 C 46.5623 4.0117 45.9061 3.3555 44.8751 3.3555 L 41.8046 3.3555 C 40.7968 3.3555 40.0936 4.0117 40.0936 5.0430 L 40.0936 13.0117 L 30.8124 4.5274 C 29.9921 3.7539 28.9843 3.3789 27.9999 3.3789 C 27.0155 3.3789 26.0312 3.7539 25.1874 4.5274 L 1.3280 26.2774 C .9062 26.6758 .6249 27.1211 .6249 27.8242 Z M 7.3280 47.4883 C 7.3280 50.7461 9.2968 52.6445 12.6015 52.6445 L 22.0936 52.6445 L 22.0936 35.9805 C 22.0936 34.9023 22.8202 34.1992 23.8984 34.1992 L 32.1718 34.1992 C 33.2499 34.1992 33.9531 34.9023 33.9531 35.9805 L 33.9531 52.6445 L 43.4216 52.6445 C 46.7264 52.6445 48.6719 50.7461 48.6719 47.4883 L 48.6719 30.3320 L 28.7734 12.4023 C 28.5155 12.1679 28.2343 12.0508 27.9531 12.0508 C 27.6952 12.0508 27.4374 12.1679 27.1562 12.4258 L 7.3280 30.4492 Z"></path></g></svg></NavLink></li>
                    <li><NavLink to="Players" title="Players"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" enable-background="new 0 0 500 500" viewBox="0 0 500 500" id="football-player"><path d="M485.622 477.911c-.138-.522-13.731-52.699-20.134-92.075-4.646-28.58-40.42-53.286-106.484-73.64l-16.133 11.617c10.754 3.314 26.326 8.437 42.119 14.759 40.04 16.03 61.533 31.327 65.707 46.765 11.479 42.458 19.73 86.444 22.98 104.812.735.175 1.488.293 2.263.293.837 0 1.688-.106 2.536-.328C483.82 488.718 487.019 483.254 485.622 477.911zM116.093 338.573c17.118-6.853 33.975-12.296 44.718-15.554l-16.398-11.636c-51.174 15.54-104.1 38.779-109.899 74.453-6.398 39.355-19.997 91.553-20.134 92.075-1.396 5.343 1.803 10.808 7.146 12.204.849.222 1.699.328 2.536.328.966 0 1.911-.149 2.814-.416h.553c3.265-18.443 11.505-62.329 22.958-104.689C54.56 369.899 76.053 354.603 116.093 338.573zM177.225 217.502c6.555 16.087 15.242 28.76 25.805 37.854.117.338.249.674.405 1.005.072.154 7.07 15.743 1.086 28.44-3.721 7.893-12.103 13.555-24.916 16.83-6.618 1.691-13.492 3.511-20.49 5.469l93.901 66.632 91.404-65.822c-7.684-2.155-15.727-4.257-24.131-6.306-11.616-2.833-19.462-8.046-23.32-15.497-6.758-13.057-.318-29.897-.17-30.281.062-.151.104-.304.157-.456 10.569-9.096 19.263-21.773 25.82-37.869 9.159-22.481 12.597-47.313 13.78-66.114 10.777-79.603-17.885-116.619-19.26-116.081-1.409.551-15.033 9.368-20.201 1.653S279.82 9.833 270.895 9.282c-8.926-.551-17.488 14.453-47.556 18.31-30.066 3.857-39.413 35.654-39.413 35.654l-12.827-10.761c-1.938-1.626-4.921-.862-5.801 1.51-10.719 28.867-5.07 72.296-2.255 89.124C163.697 162.438 166.647 191.541 177.225 217.502zM306.697 318.325l-53.277 37.061-55.836-38.841c11.85-5.289 20.242-13.063 25.027-23.216 3.955-8.391 4.695-17.063 4.119-24.562 7.236 2.343 15.008 3.531 23.271 3.531 8.555 0 16.577-1.284 24.031-3.794-.47 8.1.479 17.629 5.089 26.629C284.557 305.743 293.816 313.515 306.697 318.325zM182.912 132.48c6.457-5.579 13.698-9.665 22.889-8.375 16.334 2.292 26.935 14.799 42.438 15.901 1.692.12 3.631-.055 5.738-.434-6.35-6.233-14.218-12.45-23.985-18.283-2.371-1.416-3.146-4.485-1.729-6.856 1.416-2.371 4.483-3.145 6.856-1.729 12.577 7.51 22.286 15.662 29.792 23.782 4.427-1.564 9.133-3.475 13.818-5.382-7.756-13.285-21.55-28.925-45.996-40.516-2.495-1.183-3.559-4.165-2.375-6.66 1.183-2.496 4.166-3.556 6.66-2.376 27.615 13.094 42.863 30.771 51.264 45.737 9.381-3.598 17.769-6.118 22.438-4.366 2.006.752 4.052 2.266 6.068 4.238.217 2.155.333 4.339.333 6.549 0 13.43-1.255 47.744-12.865 76.246-11.607 28.491-29.354 42.341-54.254 42.341s-42.646-13.85-54.254-42.341c-11.612-28.502-12.866-62.815-12.866-76.246C182.881 133.298 182.904 132.891 182.912 132.48z"></path><path d="M330.619,332.637l-74.072,53.341c-1.046,0.753-2.276,1.131-3.506,1.131c-1.216,0-2.432-0.369-3.473-1.107l-76.307-54.147c-41.059,11.321-105.736,36.063-111.292,56.615c-10.929,40.421-18.903,82.271-22.354,101.558h17.423c0.577-58.481,48.578-105.714,107.717-105.714c59.138,0,107.139,47.233,107.716,105.714h188.996c-3.449-19.286-11.425-61.136-22.354-101.558C433.678,368.366,371.75,344.277,330.619,332.637z"></path><path d="M164.803,397.519c-50.946,0-92.394,41.448-92.394,92.394h3.937c0,0.038-0.003,0.076-0.004,0.114h8.643c3.772-8.875,10.933-15.297,16.32-19.148l31.096,3.129l6.979,16.019h48.803c1.669-7.327,3.677-17.214,4.885-23.272l27.067-7.664c8.069,5.413,22.447,15.645,26.64,22.439c0.279,2.757,0.424,5.553,0.424,8.382h10C257.197,438.966,215.749,397.519,164.803,397.519z M214.854,450.192l-26.33,7.455c-7.287-4.212-18.289-9.455-24.471-12.327l-3.079-19.382l27.737-14.871c9.521,2.893,18.312,7.466,26.035,13.374C214.904,432.171,215.059,443.195,214.854,450.192z M134.06,464.124l-28.581-2.876c-2.602-5.805-5.553-14.024-7.448-19.521c6.345-8.769,14.361-16.247,23.594-21.951l29.403,7.294l3.116,19.617C147.285,451.756,138.965,459.443,134.06,464.124z"></path></svg></NavLink></li>
                    <li><NavLink to="Moves" title="Moves"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="football"><path d="M59.337,35.923l0.213-0.231c0.962-0.97,1.477-2.255,1.449-3.622c-0.027-1.373-0.599-2.642-1.598-3.563l-9.685-9.206L34.729,3.316c-0.378-0.402-1.011-0.423-1.413-0.045c-0.403,0.377-0.424,1.011-0.046,1.414l14.448,15.411c-3.13,4.452-7.833,6.937-9.482,7.707L14.722,3.308c-0.383-0.399-1.017-0.412-1.414-0.029c-0.398,0.382-0.411,1.015-0.029,1.414l23.501,24.48l-2.21,4.199C32.913,26.263,26.521,21,19,21c-8.822,0-16,7.178-16,16s7.178,16,16,16c0.127,0,0.254-0.01,0.382-0.013C19.141,53.638,19,54.332,19,55.056C19,58.333,21.667,61,24.944,61H34c1.335,0,2.591-0.521,3.563-1.493l1.215-1.316l0.516,0.516C39.488,58.902,39.744,59,40,59s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.572-0.572l2.483-2.689l0.675,0.675C43.488,54.902,43.744,55,44,55s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.732-0.732l4.883-5.289l0.435,0.435C49.488,47.902,49.744,48,50,48s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.491-0.491l4.403-4.769l0.674,0.674C55.488,41.902,55.744,42,56,42s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.73-0.73l2.003-2.169l0.314,0.314C58.488,37.902,58.744,38,59,38s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L59.337,35.923z M23.135,49.315L20,47.434v-3.867l4.106-2.464l4.904,2.832l-1.295,2.461c-0.294,0.559-0.748,1.003-1.313,1.285L23.135,49.315z M10.382,48.01l0.083-4.927l3.43-1.98L18,43.566v3.868l-4.235,2.541C12.541,49.479,11.406,48.814,10.382,48.01z M5,37c0-0.666,0.063-1.316,0.153-1.958l4.311-2.393L13,34.691v4.618l-3.536,2.042l-4.31-2.393C5.063,38.316,5,37.666,5,37z M13.765,24.025L18,26.566v3.868l-4.106,2.464l-3.43-1.98l-0.083-4.927C11.406,25.186,12.541,24.521,13.765,24.025z M27.619,25.982l-0.083,4.935l-3.43,1.98L20,30.434v-3.868l4.24-2.544C25.46,24.517,26.595,25.18,27.619,25.982z M32.969,36.065c0.006,0.082,0.039,0.153,0.063,0.228l-3.089,5.87L25,39.309v-4.618l3.536-2.042l4.315,2.395C32.899,35.382,32.946,35.72,32.969,36.065z M19,41.834l-4-2.4v-4.867l4-2.4l4,2.4v4.867L19,41.834z M32.215,32.404l-2.679-1.487l0.051-3.053C30.73,29.184,31.628,30.72,32.215,32.404z M21.635,23.253L19,24.834l-2.63-1.578C17.223,23.093,18.1,23,19,23C19.9,23,20.78,23.089,21.635,23.253z M8.413,27.867l0.051,3.05L5.792,32.4C6.379,30.721,7.272,29.187,8.413,27.867z M5.792,41.6l2.672,1.483l-0.051,3.05C7.272,44.813,6.379,43.279,5.792,41.6z M19,51c-0.9,0-1.777-0.093-2.63-0.256L19,49.166l2.177,1.306c-0.162,0.133-0.317,0.272-0.463,0.42C20.148,50.961,19.573,51,19,51z M36.121,58.121C35.563,58.68,34.789,59,34,59h-9.056C22.77,59,21,57.23,21,55.056c0-1.504,0.835-2.855,2.181-3.527l4.114-2.059c0.942-0.47,1.699-1.211,2.189-2.143l0.611-1.161l1.457,0.729C31.696,46.966,31.849,47,31.999,47c0.367,0,0.72-0.202,0.896-0.553c0.247-0.494,0.047-1.095-0.447-1.342l-1.42-0.71l1.152-2.188l1.374,0.687C33.696,42.966,33.849,43,33.999,43c0.367,0,0.72-0.202,0.896-0.553c0.247-0.494,0.047-1.095-0.447-1.342l-1.337-0.668l1.151-2.188l1.291,0.645C35.696,38.966,35.849,39,35.999,39c0.367,0,0.72-0.202,0.896-0.553c0.247-0.494,0.047-1.095-0.447-1.342l-1.253-0.627l1.151-2.188l1.207,0.604C37.696,34.966,37.849,35,37.999,35c0.367,0,0.72-0.202,0.896-0.553c0.247-0.494,0.047-1.095-0.447-1.342l-1.17-0.585l1.441-2.737c1.428-0.623,6.772-3.197,10.445-8.249l8.659,8.23l-7.529,7.529c-0.391,0.391-0.391,1.023,0,1.414C50.488,38.902,50.744,39,51,39s0.512-0.098,0.707-0.293l7.215-7.215c0.046,0.201,0.073,0.408,0.077,0.619c0.017,0.824-0.295,1.599-0.878,2.182c-0.01,0.01-0.019,0.019-0.027,0.028L36.121,58.121z"></path></svg></NavLink></li>
                    <li><NavLink to="Builder" title="Team Builder"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 31 31" viewBox="0 0 31 31" id="soccer-field"><path d="M27.8774242,27.1744385H4.1230474c-1.6946299,0-3.022325-1.0598812-3.022325-2.4125843V7.2380962c0-1.3527036,1.3276951-2.4125862,3.022325-2.4125862h23.7543774c1.6946297,0,3.0218697,1.0598826,3.0218697,2.4125862v17.5237579C30.8992939,26.1145573,29.5720539,27.1744385,27.8774242,27.1744385z M4.1230474,6.2223182c-0.9580319,0-1.6255171,0.5351706-1.6255171,1.0157781v17.5237579c0,0.4806061,0.6674852,1.0157776,1.6255171,1.0157776h23.7543774c0.9575768,0,1.6250629-0.5351715,1.6250629-1.0157776V7.2380962c0-0.4806075-0.6674862-1.0157781-1.6250629-1.0157781H4.1230474z"></path><path d="M16.0000076 19.026392c-1.6687117 0-3.0264168-1.3577042-3.0264168-3.0264168s1.3577051-3.0264177 3.0264168-3.0264177 3.0264187 1.3577042 3.0264187 3.0264177S17.6687202 19.026392 16.0000076 19.026392zM16.0000076 14.3703651c-.8984671 0-1.6296091.731142-1.6296091 1.6296101s.731142 1.6296082 1.6296091 1.6296082c.898468 0 1.6296101-.7311401 1.6296101-1.6296082S16.8984756 14.3703651 16.0000076 14.3703651zM5.6112485 21.1216049H1.7991263c-.3855772 0-.698404-.3128281-.698404-.6984043v-8.8464518c0-.3855772.3128268-.6984034.698404-.6984034h3.8121223c1.6205153 0 2.939117 1.3186007 2.939117 2.9391165v4.3650255C8.5503654 19.8030033 7.2317638 21.1216049 5.6112485 21.1216049zM2.4975302 19.7247963h3.1137183c.8502703 0 1.5423088-.6920376 1.5423088-1.5423088V13.817462c0-.8502703-.6920385-1.5423088-1.5423088-1.5423088H2.4975302V19.7247963zM30.2008896 21.1216049h-3.8121204c-1.6205158 0-2.9391174-1.3186016-2.9391174-2.9391174V13.817462c0-1.6205158 1.3186016-2.9391165 2.9391174-2.9391165h3.8121204c.3855782 0 .6984043.3128262.6984043.6984034v8.8464518C30.8992939 20.8087769 30.5864677 21.1216049 30.2008896 21.1216049zM26.3887691 12.2751532c-.8502712 0-1.5423088.6920385-1.5423088 1.5423088v4.3650255c0 .8502712.6920376 1.5423088 1.5423088 1.5423088h3.113718v-7.4496431H26.3887691z"></path><rect width="1.397" height="8.148" x="15.302" y="5.524"></rect><rect width="1.397" height="8.148" x="15.302" y="18.328"></rect></svg></NavLink></li>
                    <li><NavLink to="News" title="News"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="announcement"><polygon points="17.48 55.69 29 64 32.06 59.76 21.23 51.95"></polygon><path d="M11.79 38.51l-7.75 7.76c-.42.42-.65.97-.65 1.55 0 .59.23 1.14.65 1.56l7.2 7.2c.41.41.97.64 1.55.64.59 0 1.14-.23 1.55-.64l7.75-7.76L11.79 38.51zM21.65 15.9l-.14-.01-1.37 3.34.22.06c8.75 2.41 18.55 12.21 20.97 20.96l.06.22 3.34-1.37-.01-.14C44.12 29.42 31.18 16.49 21.65 15.9z"></path><path d="M19.69 20.76l-.17-.04-6.79 16.47 10.68 10.68 16.47-6.79-.04-.17C37.68 32.54 28.07 22.94 19.69 20.76zM40.51 21.3c.32 0 .62-.12.85-.35l7.62-7.62c.47-.47.47-1.23 0-1.7-.23-.23-.53-.35-.85-.35-.32 0-.62.12-.85.35l-7.62 7.62c-.23.23-.35.53-.35.85 0 .32.12.62.35.85C39.89 21.17 40.19 21.3 40.51 21.3zM60.57 23.46c-.14-.53-.62-.89-1.16-.89-.1 0-.2.01-.3.04l-12.07 3.17c-.64.17-1.02.83-.85 1.46.14.53.61.89 1.16.89.1 0 .21-.01.31-.04l12.07-3.17C60.36 24.75 60.74 24.1 60.57 23.46zM33.37 14.42c.1.03.2.04.31.04.54 0 1.02-.37 1.16-.89L38.01 1.5c.17-.64-.21-1.3-.85-1.46C37.05.01 36.95 0 36.85 0c-.55 0-1.02.37-1.16.89l-3.17 12.07C32.35 13.6 32.73 14.25 33.37 14.42z"></path></svg></NavLink></li>
                  </ul>
                </nav>
                <div id="terms_of_use">
                    <Link to="/Terms" title="Terms of use"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="terms-condition"><path d="M193.31,293.5h115a7.5,7.5,0,0,0,0-15h-115a7.5,7.5,0,0,0,0,15Zm0,60h100a7.5,7.5,0,0,0,0-15h-100a7.5,7.5,0,1,0,0,15Zm0-120h115a7.5,7.5,0,0,0,0-15h-115a7.5,7.5,0,0,0,0,15ZM220.8,45.15a7.5,7.5,0,1,0-7.5-7.5A7.5,7.5,0,0,0,220.8,45.15ZM193.31,173.5h115a7.5,7.5,0,0,0,0-15h-115a7.5,7.5,0,0,0,0,15Zm-60,255a22.5,22.5,0,1,0-22.5-22.5A22.53,22.53,0,0,0,133.31,428.5Zm0-30a7.5,7.5,0,1,1-7.5,7.5A7.51,7.51,0,0,1,133.31,398.5Zm0-210a22.5,22.5,0,1,0-22.5-22.5A22.53,22.53,0,0,0,133.31,188.5Zm0-30a7.5,7.5,0,1,1-7.5,7.5A7.51,7.51,0,0,1,133.31,158.5Zm342.48-23.65a22.5,22.5,0,0,0-41.33-4.5l-8.17,14.9h0l-20,36.47V97.5A37.54,37.54,0,0,0,368.8,60H298.7a27.11,27.11,0,0,0-20.89-9.82h-9.1a48.81,48.81,0,0,0-.52-9.64A48,48,0,0,0,172.85,48c0,.74,0,1.49.05,2.23h-9.1A27.11,27.11,0,0,0,142.91,60H72.8A37.54,37.54,0,0,0,35.3,97.5v377A37.54,37.54,0,0,0,72.8,512h296a37.54,37.54,0,0,0,37.5-37.5V275.37L473.92,152A22.32,22.32,0,0,0,475.79,134.85ZM368.8,75a22.52,22.52,0,0,1,22.5,22.5V209.1l-30.5,55.66V112.5a7.5,7.5,0,0,0-7.5-7.5H305V77.33c0-.78,0-1.56-.11-2.33ZM151.64,77.33A12.17,12.17,0,0,1,163.8,65.18h17.74a7.51,7.51,0,0,0,7.28-9.3,32.93,32.93,0,0,1,9.82-32.31A32.72,32.72,0,0,1,224,15.15a33,33,0,0,1,28.75,40.73,7.51,7.51,0,0,0,7.28,9.3h17.74A12.17,12.17,0,0,1,290,77.33v28.84a12.17,12.17,0,0,1-12.16,12.15h-114a12.17,12.17,0,0,1-12.16-12.15Zm12.16,56h114A27.17,27.17,0,0,0,301.17,120H345.8V292.13L311,355.72a8,8,0,0,0-.44,1,1.46,1.46,0,0,0-.07.19,8,8,0,0,0-.28,1v0L302.8,398.5H193.31a7.5,7.5,0,1,0,0,15h115l.41,0,.34,0a7.48,7.48,0,0,0,5.1-2l31.64-29.35V452H95.8V120h44.64A27.17,27.17,0,0,0,163.8,133.32ZM323.05,370.91l8.06,4.41-10.65,9.88ZM391.3,474.5A22.52,22.52,0,0,1,368.8,497H72.8a22.53,22.53,0,0,1-22.5-22.5V97.5A22.53,22.53,0,0,1,72.8,75h64c-.07.77-.11,1.55-.11,2.33V105H88.3a7.5,7.5,0,0,0-7.5,7.5v347a7.5,7.5,0,0,0,7.5,7.5h265a7.5,7.5,0,0,0,7.5-7.5V358.4l30.5-55.66Zm.91-204.63h0l-51.34,93.68-13.16-7.2,32.12-58.62a1.28,1.28,0,0,0,.11-.2l45.4-82.85.1-.17L435.84,159,449,166.25Zm68.56-125.11-4.57,8.34-13.15-7.21,4.57-8.33a7.5,7.5,0,1,1,13.15,7.2ZM133.31,368.5a22.5,22.5,0,1,0-22.5-22.5A22.53,22.53,0,0,0,133.31,368.5Zm0-30a7.5,7.5,0,1,1-7.5,7.5A7.51,7.51,0,0,1,133.31,338.5Zm0-30a22.5,22.5,0,1,0-22.5-22.5A22.53,22.53,0,0,0,133.31,308.5Zm0-30a7.5,7.5,0,1,1-7.5,7.5A7.51,7.51,0,0,1,133.31,278.5Zm0-30a22.5,22.5,0,1,0-22.5-22.5A22.53,22.53,0,0,0,133.31,248.5Zm0-30a7.5,7.5,0,1,1-7.5,7.5A7.51,7.51,0,0,1,133.31,218.5Z"></path></svg></Link>
                </div>
          </header>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Players" element={<Players />} />
              <Route path="/Builder" element={<Builder />} />
              <Route path="/Moves" element={<Moves />} />
              <Route path="/News" element={<News />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;