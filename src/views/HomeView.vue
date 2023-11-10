<template>
  <main>
    <div id="fullpage">

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
              <b>데이터 통신,</b>
              사용자 경험 <b>최적화,</b>
              <b>보안, 백엔드 브릿지</b>
              서비스,
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
        <div class="sec1">
          <div class="textbox">
            <figure>
              <figcaption>ABOUT</figcaption><img src="../assets/about.png" />
            </figure>
            <span>저의 개발 경험은 광범위하며, 웹 애플리케이션부터 모바일 앱, 데스크톱 애플리케이션, 그리고 중요한 데이터베이스와 서버 시스템까지 여러 영역에서 다양한 프로젝트를 성공적으로 수행해
              왔습니다. 또한 소프트웨어 개발 방법론과 도구를 최신으로 유지하고, 개발 프로세스를 개선하기 위해 지속적인 학습과 실험을 통해 발전하고 있습니다.</span>
          </div>
        </div>
        <div class="sec2">

          <div class="skillsbox box1">
            <p>front-End</p>
            <div class="icons">
              <figure v-for="(item, index) in skillbox1" :key="index" :class="{ active: item.id === tagId }"
                @click="idEdit(item.id)">
                <div :style="{ 'background-image': `url(${item.src})` }"></div>
                <p>{{ item.text }}</p>
              </figure>
            </div>
          </div>

          <div class="skillsbox box2">
            <p>back-End</p>
            <div class="icons">
              <figure v-for="(item, index) in skillbox2" :key="index" :class="{ active: item.id === tagId }"
                @click="idEdit(item.id)">
                <div :style="{ 'background-image': `url(${item.src})` }"></div>
                <p>{{ item.text }}</p>
              </figure>
            </div>
          </div>

          <div class="skillsbox box3">
            <p>etc</p>
            <div class="icons">
              <figure v-for="(item, index) in skillbox3" :key="index" :class="{ active: item.id === tagId }"
                @click="idEdit(item.id)">
                <div :style="{ 'background-image': `url(${item.src})` }"></div>
                <p>{{ item.text }}</p>
              </figure>
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
          <div v-for="(item, index) in workbox" :key="index" class="workbox" @mouseover="srcEdit(item.src)">
            <div class="text">
              <strong>{{item.name}}</strong>
              <span>{{item.desc}}</span>
              <p>{{item.skills}}</p>
            </div>
            <figure class="logo"><div></div></figure>
          </div>
        </div>
      </section>

      <section class="section section4">
        <form @submit="insertComment" class="comment">
          <input required placeholder="이름" type="text" name="name" v-model="name"/>
          <textarea required placeholder="text of yours" name="text" v-model="text"></textarea>
        </form>
        <button @click="commentGet">gettest</button>
        <ul>
          <li v-for="(item, index) in comment" :key="index">{{ item.text }}</li>
        </ul>
      </section>
    </div>
  </main>
</template>


<script>
import "../css/Home.scss"
import fullpage from 'fullpage.js';
import { mapState, mapMutations } from 'vuex';
import axios from "axios";

export default {
  name: 'HomeView',
  data() {
    return {
      skillbox1: [
        { id: 1, src: "./img/js.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 2, src: "./img/css.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 3, src: "./img/scss.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 4, src: "./img/html.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 5, src: "./img/jquery.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 6, src: "./img/react.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 7, src: "./img/typescript.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 8, src: "./img/next.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 9, src: "./img/vue.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false }
      ],
      skillbox2: [
        { id: 10, src: "./img/mysql.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 11, src: "./img/express.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 12, src: "./img/npm.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 13, src: "./img/mongodb.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 14, src: "./img/mariadb.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 15, src: "./img/nodejs.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false }
      ],
      skillbox3: [
        { id: 16, src: "./img/github.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 17, src: "./img/cloudtype.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 18, src: "./img/postman.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 19, src: "./img/swiper.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 20, src: "./img/fullpage.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 21, src: "./img/figma.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 22, src: "./img/zeplin.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 23, src: "./img/vercel.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 24, src: "./img/netlify.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false },
        { id: 25, src: "./img/notion.png", text: "프론트앤드개발을 위한 기본적인 스크립트 구조를 알고있어요.", active: false }
      ],
      workbox: [
        {id: 1, name: "Wonder place", desc: "어쩌구 저쩌구", src: "./img/wonderplace.png", skills: "#react, #css, #html" },
        {id: 2, name: "Everland", desc: "어쩌구 저쩌구", src: "./img/everland.png", skills: "#react, #css, #html" },
        {id: 3, name: "Scary House", desc: "어쩌구 저쩌구", src: "./img/scaryhouse.png", skills: "#react, #css, #html" },
        {id: 4, name: "Movie Finder", desc: "어쩌구 저쩌구", src: "./img/moviefinder.png", skills: "#react, #css, #html" },
        {id: 5, name: "toGrocery", desc: "어쩌구 저쩌구", src: "./img/togrocery.png", skills: "#react, #css, #html" },
        {id: 6, name: "petSalon", desc: "어쩌구 저쩌구", src: "./img/js.png", skills: "#react, #css, #html" }
      ],

      comment: [],
      instance : axios.create({baseURL:"http://localhost:3050"}),
      name: "",
      text: ""

    }
  },
  mounted() {
    new fullpage('#fullpage', {
      // fullPage.js 옵션 설정
    });
    this.commentGet();
  },
  computed: {
    ...mapState(["tagId", "workSrc"])
  },
  methods: {
    ...mapMutations(["idChange", "srcChange"]),
    idEdit(str) {
      this.idChange(str)
    },
    srcEdit(src) {
      this.srcChange(src)
    },
    commentGet(){
      this.instance.get(`/api`)
      .then(res=>{
        this.comment = res.data;
        console.log(this.comment)
      })
    },
    insertComment(e){
      e.preventDefault();
      let formData = new FormData(e.target);
      let objData = Object.fromEntries(formData);
      this.instance.post(`/api/insert`, objData)
      .then(res=>{
        this.comment = res.data;
      })
    }
  },
}
</script>
