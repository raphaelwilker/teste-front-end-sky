const components = [

    require('./components/menu'),
    require('./components/tabs'),
    require('./components/carousel'),
    require('./components/playlist'),
    require('./components/footer')
    
];


const mixins = [
    require('./mixins/service')
]

new Vue({
    
    el: '#app',
    mixins: mixins,
    components: components,
    data(){
        return{
            datalist: []
        }
    },
    watch:{
        datalist: function(val){
            this.datalist = val;
            this.$refs.customcarousel.buildList();
            this.$refs.playlist.buildList();
        }
    }
    // created: function () {
    //     console.log('component hook called')
    // }
    
});