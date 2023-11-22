<template>
  <main>
    <full-page ref="fullpage" :options="options" id="fullpage" :skip-init="true">

      <section class="section section1">
        <div class="sec1">
          <div class="textbox">
            <span>프론트엔드 개발자</span>
            <strong>CHAEMIN LIM</strong>
          </div>
        </div>
        <div class="sec2">
          <span class="birth">1992.04.29</span>
          <figure class="finderlogo"><img src="../assets/finder.png" /></figure>
          <div class="textbox">
            <figure class="pointlogo"><img src="../assets/textpoint.png" /></figure>
            <span class="firsttext">
              <b>데이터 통신,</b><br>
              사용자 경험 <b>최적화,</b><br>
              <b>보안, 백엔드 브릿지</b><br>서비스,
            </span>
            <span class="secondtext">
              그리고 각종 프레임워크 심화와
              서버분야에 이르기까지
              다양한 측면에서 소프트웨어를 개발하고
              향상시키는 데 기여하고 있습니다.
            </span>
          </div>
        </div>
      </section>

      <section class="section section2">
        <div class="sec1" @click="idErase">
          <div class="textbox">
            <figure>
              <figcaption>ABOUT</figcaption><img src="../assets/about.png" />
            </figure>
            <span>저의 개발 경험은 광범위하며, 웹 애플리케이션부터 모바일 앱, 데스크톱 애플리케이션, 그리고 중요한 데이터베이스와 서버 시스템까지 여러 영역에서 다양한 프로젝트를 성공적으로 수행해
              왔습니다. 또한 소프트웨어 개발 방법론과 도구를 최신으로 유지하고, 개발 프로세스를 개선하기 위해 지속적인 학습과 실험을 통해 발전하고 있습니다.</span>
          </div>
        </div>
        <div class="sec2">
          <span class="scrolltext">JAVASCRIPT CSS REACT SCSS HTML JQUERY REACT TYPESCRIPT NEXT.JS VUE.JS MYSQL NPM MONGODB NOSQL NODE.JS</span>
          <span class="clickIcon fa-bounce"><div></div></span>
          <div class="skillIntroduce">
            <div class="skillsbox box1">
            <p>front-End</p>
            <div class="icons">
              <figure v-for="(item, index) in skillbox1" :key="index" :class="{ active: item.id === tagId }"
                @click="(e)=>{idEdit(e, item.id)}">
                <div class="boxes" :style="{ 'background-image': `url(${item.src})` }"></div>
                <div class="popup popclose">
                  <div :style="{ 'background-image': `url(${item.src})` }" class="popclose"></div>
                  <p class="popclose">{{ item.text }}</p>
                </div>
              </figure>
            </div>
            </div>

            <div class="skillsbox box2">
              <p>back-End</p>
              <div class="icons">
                <figure v-for="(item, index) in skillbox2" :key="index" :class="{ active: item.id === tagId }"
                @click="(e)=>{idEdit(e, item.id)}">
                  <div class="boxes" :style="{ 'background-image': `url(${item.src})` }"></div>
                  <div class="popup popclose">
                    <div :style="{ 'background-image': `url(${item.src})` }" class="popclose"></div>
                    <p class="popclose">{{ item.text }}</p>
                  </div>
                </figure>
              </div>
            </div>

            <div class="skillsbox box3">
              <p>etc</p>
              <div class="icons">
                <figure v-for="(item, index) in skillbox3" :key="index" :class="{ active: item.id === tagId }"
                @click="(e)=>{idEdit(e, item.id)}">
                  <div class="boxes" :style="{ 'background-image': `url(${item.src})` }"></div>
                  <div class="popup popclose">
                    <div :style="{ 'background-image': `url(${item.src})` }" class="popclose"></div>
                    <p class="popclose">{{ item.text }}</p>
                  </div>
                </figure>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="section section3">
        <div class="sec1">
          <div class="title">
            <strong>Works</strong>
            <figure>
              <!-- <img :src="workSrc"/> -->
              <div :style="{ 'background-image': `url(${workSrc})` }"></div>
            </figure>
          </div>
        </div>
        <div class="sec2">
          <div v-for="(item, index) in workbox" :key="index" class="workbox" :class="{active: item.id === workMouseOn}" @mouseover="srcEdit(item.src)" @mouseenter="workMouseAdd(item.id)" @mouseleave="workMouseAdd('')">
            <div class="text">
              <strong>{{item.name}}</strong>
              <span>{{item.desc}}</span>
              <p>{{item.skills}}</p>
            </div>
            <div class="links">
              <a :href="item.githref" class="gitlink" target="_blank"><div class="gitlogoicon"></div></a>
              <a :href="item.href" class="mainlink" target="_blank"><div class="mainlogoicon"></div></a>
            </div>
          </div>
        </div>
      </section>

      <section class="section section4">
        <div class="sec1">
          <div class="title">
            <strong>CONTACT</strong>
            <div class="contactTextBox">
              <a v-for="(item, index) in contact" :key="index" class="contactCell" :href="item.address">
                <figure><div :style="{ 'background-image': `url(${item.src})` }"></div></figure>
                <span>{{ item.text }}</span>
              </a>
            </div>
          </div>
        </div>
        <div v-if="mode=='list'" class="sec2">
          <form @submit="(e)=>{insertComment(e)}" class="comment">
            <strong>Comments 😎</strong>
            <input required placeholder="이름" type="text" name="name" v-model="name" class="namewrite"/>
            <input required placeholder="e-mail" type="email" name="email" v-model="email" class="emailwrite"/>
            <textarea required placeholder="text of yours" name="text" v-model="text" class="textwrite"></textarea>
            <button class="writebutton">댓글 달기</button>
            <!-- <button type="button" @click="modechange('modify')" class="writebutton">댓글 수정</button> -->
          </form>
          <ul class="commentwriting">
            <span>댓글들</span>
            <li v-for="(item, index) in comment" :key="index" class="commentcell">
              <div class="info">
                <p>{{ item.name }}</p>
                <b>{{ item.day }}</b>&nbsp;
                <b>{{ item.time }}</b>
              </div>
              <div class="texts">
                <p>{{ item.text }}</p>
                <button @click="modechange('modify'), commentIdEdit(item.name), this.name=commentId" class="modbutton">수정하기</button>
              </div>
            </li>
          </ul>
        </div>
        <div v-else-if="mode=='modify'" class="sec2">
          <form  @submit="(e)=>{modifyComment(e)}" class="comment">
            <strong>댓글 수정하기 😎</strong>
            <input required placeholder="작성한 댓글의 이름을 적어주세요" type="text" name="name" v-model="name" class="namewrite modname"/>
            <input required placeholder="작성한 댓글의 e-mail을 적어주세요" type="email" name="email" v-model="email" class="emailwrite"/>
            <textarea required placeholder="수정할 댓글 내용을 적어주세요" name="text" v-model="text" class="textwrite"></textarea>
            <button class="writebutton">수정하기</button>
            <button type="button" class="writebutton" @click="modechange('list'), this.name=''">취소하기</button>
          </form>
        </div>
      </section>
      
    </full-page>
  </main>
</template>


<script>
import "../css/Home.scss"
import { mapState, mapMutations } from 'vuex';
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        afterResponsive: this.afterResponsive,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        responsiveWidth: 780,
      },
      skillbox1: [
        { id: 1, src: "./img/js.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 다룹니다.", active: false },
        { id: 2, src: "./img/css.png", text: "도큐먼트 디자인을 위한 CSS코드를 다룰 수 있습니다.", active: false },
        { id: 3, src: "./img/scss.png", text: "심화된 CSS코드인 SCSS를 더 주로 다룹니다.", active: false },
        { id: 4, src: "./img/html.png", text: "도큐먼트 구조파악과 마크업을 위한 기초부터 심화적 구조를 다룹니다.", active: false },
        { id: 5, src: "./img/jquery.png", text: "자바스크립트에 더해 다룰 줄 아는 가장 기초적인 보조언어입니다.", active: false },
        { id: 6, src: "./img/react.png", text: "자바스크립트에 대한 이해도와 더불어 데이터교환의 구조를 파악하고 있으며 여러 프로젝트를 수행하였습니다.", active: false },
        { id: 7, src: "./img/typescript.png", text: "대규모 프로젝트에서 안전성을 구비할 수 있습니다.", active: false },
        { id: 8, src: "./img/next.png", text: "리엑트에 대한 이해도와 더불어 서버를 다루는데에 특히 이해도가 높습니다.", active: false },
        { id: 9, src: "./img/vue.png", text: "기본적인 컨텍스트(store) 이해와 더불어 vue의 각종 독립 훅을 이해하고 능동적으로 다룰 수 있습니다.", active: false }
      ],
      skillbox2: [
        { id: 10, src: "./img/mysql.png", text: "express 와 next.js 에서의 프로젝트로 여러 데이터 교환 구조를 만들어 본 경험이 있습니다.", active: false },
        { id: 11, src: "./img/express.png", text: "서버사이드 렌더링이 내장된 next.js 를 제외한 리액트와 vue 에서 게이트웨이로 다루어 보았습니다.", active: false },
        { id: 12, src: "./img/npm.png", text: "프레임워크에서 각종 모듈을 위한 기초적인 모듈로써 모든 구조에서 응용하고 있습니다.", active: false },
        { id: 13, src: "./img/mongodb.png", text: "express 와 더불어 모든 프레임워크에서 주요 명령어를 모듈화시켜 사용하고 있습니다.", active: false },
        { id: 14, src: "./img/mariadb.png", text: "mysql 과 더불어 같은 구조로써 서버사이드랜더링 구조를 이해하는데 사용하였습니다.", active: false },
        { id: 15, src: "./img/nodejs.png", text: "프론트단과 서버단의 구조연결을 위한 기초적 구조를 알고있습니다.", active: false }
      ],
      skillbox3: [
        { id: 16, src: "./img/github.png", text: "각종 프로젝트 버전 공유와 업데이트를 위해 사용할 줄 알고있습니다.", active: false },
        { id: 17, src: "./img/cloudtype.png", text: "서버사이드렌더링으로 제한적이지만 동적서버를 제공하는 사이트로 몇몇 프로젝트 서버를 위해 사용중입니다.", active: false },
        { id: 18, src: "./img/postman.png", text: "각종 API들을 사용하기 앞서 사용자 키와 각종 파라미터를 테스트하는데 사용하였습니다.", active: false },
        { id: 19, src: "./img/swiper.png", text: "페이지 전환이라는 요소에서 횡스크롤 디자인과 기능적으로 가장 이상적인 플러그인 이라고 생각합니다.", active: false },
        { id: 20, src: "./img/fullpage.png", text: "종스크롤 페이지 전환에서 주로 사용하는 플러그인입니다.", active: false },
        { id: 21, src: "./img/figma.png", text: "페이지 사전구상에서 가장 기초적으로 사용하고 있으며 기본적인 디자인 구조를 만들 수 있어요.", active: false },
        { id: 22, src: "./img/zeplin.png", text: "포토샵과 연결하여 기초적인 사이트 디자인을 구상하는데 사용할 수 있어요.", active: false },
        { id: 23, src: "./img/vercel.png", text: "next.js 프로젝트 빌드와 업로드를 위해 사용중입니다.", active: false },
        { id: 24, src: "./img/netlify.png", text: "vue 프로젝트 빌드와 업로드를 위해 사용중입니다.", active: false },
        { id: 25, src: "./img/notion.png", text: "각종 중요한 코드 메모와 팀 프로젝트 상황공유를 위해 사용하고 있으며 마크다운 명령어를 주로 다룰 수 있어요.", active: false },
        { id: 26, src: "./img/finale.png", text: "각종 음악악보 사보 및 작곡, 가상악기로 음원제작을 할 수 있어요.", active: false },
        { id: 27, src: "./img/german.png", text: "독일에서의 유학생활중 학업과 현업으로 독일어 회화가 가능합니다.", active: false }
      ],
      workbox: [
        {id: 0, name: "Portfolio", desc: "보고계신 포트폴리오 페이지 입니다.", src: "./img/portfolio.gif", skills: "#Vue.js, #scss, #html, #MongoDB, #Express", href: "#", githref:"https://github.com/Sovidi/portfolio2" },
        {id: 1, name: "Wonder place", desc: "원더플레이스 브랜드관 소개페이지 클론코딩", src: "./img/wonderplace.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/wonderplace_clone/", githref:"https://github.com/Sovidi/wonderplace_clone" },
        {id: 2, name: "Everland", desc: "에버랜드 홈페이지 리뉴얼", src: "./img/everland.png", skills: "#javascript, #scss, #html, #jQuery", href: "https://sovidi.github.io/everland/", githref:"https://github.com/Sovidi/everland" },
        {id: 3, name: "Scary House", desc: "귀신의 집, 공포 추리 미니 게임", src: "./img/scaryhouse.png", skills: "#react, #scss, #html, #Express", href: "https://sovidi.github.io/scary/", githref:"https://github.com/Sovidi/scary" },
        {id: 4, name: "Movie Finder", desc: "MovieDB API 를 활용한 간단 무비 파인더", src: "./img/moviefinder.png", skills: "#react, #scss, #html", href: "https://sovidi.github.io/movies/", githref:"https://github.com/Sovidi/movies" },
        {id: 5, name: "toGrocery", desc: "시장 농산물 물가현황 간편확인 및 위치기반 매칭 어플", src: "./img/togrocery.png", skills: "#next.js, #scss, #html", href: "https://togrocery.vercel.app/", githref:"https://github.com/Sovidi/togrocery" },
        {id: 6, name: "petSalon", desc: "미용사 찾기 위치기반 서비스 어플", src: "./img/petsalon.png", skills: "#react, #css, #html", href: "#", githref:"#" }
      ],
      contact: [
        {id: 1, text:"010-4338-4358", address: "#page4", src: "./img/phone.png"},
        {id: 2, text:"lim132445@gmail.com", address: "lim132445@gmail.com", src: "./img/mail.png"},
        {id: 3, text:"Github", address: "https://github.com/Sovidi", src: "./img/github.png"},
        {id: 4, text:"https://velog.io/@qwert4572", address: "https://velog.io/@qwert4572", src: "./img/velog.png"},
        {id: 5, text:"Instagram", address: "https://www.instagram.com/chaemmni/", src: "./img/instagram.png"}
      ],

      comment: [],
      instance : axios.create({baseURL:"https://port-0-portfolio2-6w1j2alm48bfok.sel5.cloudtype.app"}),
      // instance : axios.create({baseURL:process.env.E_HOST}),
      // instance : axios.create({baseURL:"http://localhost:3050/"}),
      name: "",
      email: "",
      text: ""
    }
  },
  computed: {
    ...mapState(["tagId", "workSrc", "page3", "workMouseOn", "mode", "commentId"])
  },
  methods: {
    ...mapMutations(["idChange", "srcChange", "page3income", "workMouseChange", "modeEdit", "idSave"]),

    afterLoad(origin, destination, direction) {
      console.log(origin, destination, direction)
      if(destination.index === 2) {
        this.pagingEdit(true);
        console.log(this.page3);
      } else {
        this.pagingEdit(false);
        console.log(this.page3);
      }
    },

    afterResponsive: function (isResponsive) {
      if (isResponsive) {
        this.options.autoScrolling == false; // 768px 이상에서 풀페이지 자동 스크롤 비활성화
      } else {
        this.options.autoScrolling == true; // 768px 이상에서 풀페이지 자동 스크롤 비활성화
      }
    },

    idEdit(e, str) {
      e.target.classList.contains("popclose") ? this.idErase() : this.idChange(str);
      console.log(e.target.classList.contains("popclose"))
    },

    idErase(){
      this.idChange("");
    },

    srcEdit(src) {
      this.srcChange(src)
    },

    commentIdEdit(str){
      this.idSave(str)
    },

    async commentGet(){
      await this.instance.get(`/api`)
      .then(res=>{
        let d = res.data
        this.comment = d.sort((b, a)=>{
          var nameA = a._id; 
          var nameB = b._id; 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        console.log(this.comment)
      })
    },

    pagingEdit(boolean){
      this.page3income(boolean);
    },

    async insertComment(e){
      e.preventDefault();
      let formData = new FormData(e.target);
      let today = new Date();
      formData.append("day", `${String(today.getFullYear())}.${String(today.getMonth()+1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`)
      formData.append("time", `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`)
      let objData = Object.fromEntries(formData);
      console.log(objData)

      await this.instance.post(`/api/insert`, objData)
      // .then(res=>{
      //   this.comment = res.data;
      // })
      await this.commentGet();
      this.name = "";
      this.email = "";
      this.text = "";
    },

    async modifyComment(e){
      e.preventDefault();
      let formData = new FormData(e.target);
      let today = new Date();
      formData.append("time", `${String(today.getFullYear())}.${String(today.getMonth()+1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}`)
      let objData = Object.fromEntries(formData);
      console.log(objData)

      await this.instance.put(`/api/put`, objData)
      // .then(res=>{
      //   this.comment = res.data;
      // })
      await this.commentGet();
      this.name = "";
      this.email = "";
      this.text = "";
      this.modechange("list");
    },

    componentsReady() {
      this.$refs.fullpage.init()
      console.log("fuck")
    },

    workMouseAdd(boolean) {
      this.workMouseChange(boolean)
    },

    modechange(str) {
      this.modeEdit(str)
    }

  },

  mounted() {
    this.commentGet();
    this.componentsReady();
  }
}
</script>
