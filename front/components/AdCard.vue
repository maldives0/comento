<template>
  <div class="ad-card-layout">
    <div class="ad-card-category">
      <span class="sponsored">sponsored</span>
    </div>
    <div class="ad-card-content-layout">
      <div class="ad-card-image">
        <img>
      </div>
      <div class="ad-card-text-layout">
        <div class="ad-card-title">
          <span>
            Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title 
            Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title 
          </span>
        </div>
        <div class="ad-card-contents">
          <span>
            contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents contents contents contents contents contents contents contents contents
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.ad-card-layout{
  padding: 25px 30px 21px;
  border-radius: 5px;
  backdrop-filter: blur(30px);
  border: solid 1px #e1e4e7;
  background-color: #ffffff;
}
.sponsored{
  font-family: SpoqaHanSans;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adb5bd;
}
.ad-card-content-layout{
    display:flex;
    justify-content:center;
    align-items:center;
}
.ad-card-image {
  width: 310px;
  height: 179px;
  margin: 17.5px 29.5px 0 0;
  border: solid 1px #e1e4e7;
  background:#e1e4e7;
}
.ad-card-text-layout{
    width: 435px;
}
.ad-card-title{
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; 
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
}
.ad-card-title span{
  font-family: SpoqaHanSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #282c30;
}
.ad-card-contents{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; 
  word-wrap: break-word; 
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
}
.ad-card-contents span{
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #495057;
}

@media (max-width: 768px){
  .ad-card-layout{
  padding: 25px 15px 21px;
  border-radius: 0px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  }
  .ad-card-content-layout{
      display:block;
      }
  .ad-card-image {
    width: 100%;
    margin: 17.5px 0 23.5px 0; 
  }
  .ad-card-text-layout{
      width: 100%;
  }
  .ad-card-contents{
    width: 100%;
    -webkit-line-clamp: 2; 
    
  }

}
</style>