Vue.component('playlist', {
    data: function () {
        return {
            listItemsMovie: []
        }
    },
    methods: {
        
        buildList: function(){
             
            this.listItemsMovie = this.$root.datalist[2].movies;
             
            setTimeout(function(){
                for(var i = 0; i < 3; i++){
                    var id = '#swiper-container-playlist-'+(i+1);
                    var idNext = '.swiper-button-next-'+(i+1);
                    var idPrev = '.swiper-button-prev-'+(i+1);
                    console.log('id')
                    var mySwiper = new Swiper(id, {
                        speed: 400,
                        spaceBetween: 20,
                        width: 164,
                        heigh: 246,
                        navigation: {
                            nextEl: idNext,
                            prevEl: idPrev,
                        }
                    });
                }

             },1000)
        }
        
    },
    
    template: `
        <div>
            <div class="container-swiper-playlist" >
                <h6>Em alta</h6>
                <br>
                <div class="swiper-container-playlist" id="swiper-container-playlist-1">
                
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide container-img" v-for="(item, index) in listItemsMovie">
                            <img :src="item.images[0].url" :alt="item.title" />
                        </div>
                    </div>
                    
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev swiper-button-prev-1"></div>
                    <div class="swiper-button-next swiper-button-next-1"></div>
                </div>
            </div>
            <div  class="container-swiper-playlist" >
                <h6>Estréias</h6>
                <br>
                <div class="swiper-container-playlist" id="swiper-container-playlist-2">
                
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide container-img" v-for="(item, index) in listItemsMovie">
                            <img :src="item.images[0].url" :alt="item.title" />
                        </div>
                    </div>
                    
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev swiper-button-prev-2"></div>
                    <div class="swiper-button-next swiper-button-next-2"></div>
                </div>
            </div>
            <div  class="container-swiper-playlist" >
                <h6>Recomendamos para você</h6>
                <br>
                <div class="swiper-container-playlist" id="swiper-container-playlist-3">
                
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide container-img" v-for="(item, index) in listItemsMovie">
                            <img :src="item.images[0].url" :alt="item.title" />
                        </div>
                    </div>
                    
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev swiper-button-prev-3"></div>
                    <div class="swiper-button-next swiper-button-next-3"></div>
                </div>
            </div>
        </div>`
});