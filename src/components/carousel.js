Vue.component('carousel', {
    data: function () {
        return {
            listItems:[],
        }
    },
    methods: {
        
        buildList: function(){
            this.listItems = this.$root.datalist[0].items;
            setTimeout(function(){
                
                var carousel = new Swiper('.swiper-container-carousel', {
                    speed: 400,
                    spaceBetween: 20,
                    slidesPerView: 3,
                    centeredSlides: true,
                    // loop: true,
                    // width: 1024,
                    // heigh: 578,
                    // autoplay: {
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    }
                });

             },1000)
        }

    },
    template: `
    <div class="swiper-container-carousel" id="swiper-container-carousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide"  v-for="(item , index) in listItems" :class="{ active: index == 0 }">
                <img :src="item.images[0].url" class="d-block w-100" :alt="item.title">
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
    </div>
    `
});