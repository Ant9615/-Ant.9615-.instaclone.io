var postData = {
    props: ["post"],
    head: {
        img: "instaimage/myprofile.jpg",
        name: "ant.9615"
    },

    contents: [{
        img: "instaimage/instapic.png"
    }],

    infor: {
        img: "instaimage/택.jpg",
        name: "in_taekkkk",
        number: 37
    },

    comments: [{
            name: "skyerhn",
            content: "믄데믄데",
            isLike: false
        },
        {
            name: "jin.jeong.j",
            content: "크으.....",
            isLike: false
        }
    ],
    date: "6월 29일"
};

var navigation = {
    props: ["post"],
    //html
    template: `
          <div class="navigation">
          <div class="nav-container">
              <span class="nav-logo">
                  <i class="fab fa-instagram navBtn"></i>
                  <span class="verticalLion"></span>
                  <img class="logoFont" src="./image/인스타플젝4.png" alt="">
              </span>
              <span class="nav-group">
                  <span class="nav-group-container">
                      <span class="nav-explore">
                          <i class="far fa-compass navBtn"></i>
                      </span>
                  </span>
                  <span class="nav-like">
                      <i class="far fa-heart navBtn"></i>
                  </span>
                  <span class="nav-profile">
                      <i class="far fa-user navBtn"></i>
                  </span>
              </span>
          </div>
      </div>
          `
};

var postHead = {
    props: ["post"],
    //html
    template: `
     <div class="post-head">
     <div class="post-head-container">
     <div class="post-head-profile">
     <img class="post-head-profileImg" :src="post.head.img" alt="">
     </div>
     <div class="post-head-name">{{ post.head.name}}</div>
     <div class="post-head-btn">...</div>
     </div>
     </div>
     `
};

var postContent = {
    props: ["post"],
    //html
    template: `
      <div class="post-contents">
      <div class="post-contents-container" v-for="content in post.contents">
          <img class="post-contentsImg" :src="content.img" alt="">
      </div>
      </div>
      `
};

var postInfor = {
    props: ["post"],
    //html
    template: `
      <div class="post-infor">
              <div class="post-infor-container">
                  <i class="far fa-comment inforBtn"></i>
                  <i class="fas fa-external-link-alt inforBtn"></i>
                  <span class="post-infor-pages"></span>
                  <i class="far fa-bookmark inforBtn"></i>
              </div>
          </div>
      `
};

var postComment = {
    props: ["post"],
    //html
    template: `
          <div class="post-comment">
              <div class="post-comment-like">
                  <span class="post-comment-likeProfile">
                      <img class="post-comment-likeImg" :src="post.infor.img" alt="">
                  </span>
                  <span class="post-comment-likeNumber">
                      좋아하는 사람 {{post.infor.name}} 외 {{post.infor.number}}명
                  </span>
              </div>
              <div class="post-comment-list">
                  <div class="post-comment-item" v-for="comment in post.comments">
                      <span class="post-comment-itemName" v-text="comment.name"></span>
                      <span class="post-comment-itemContent" v-text="comment.content"></span>
                      <span class="post-comment-itemLike">
                          <i class="far fa-heart commentBtn"></i>
                      </span>
                  </div>
              </div>
              <div class="post-comment-date" v-text="post.date"></div>
              </div>
      `
};