module.exports = {
    data(){
        // dataList = []
    },
    created: function () {
        this.getData();
    },
    methods : {
        getData: function(){
            var self = this;
            self.$http.get('https://sky-frontend.herokuapp.com/movies').then(response =>{
                self.datalist = response.body;
                self.$emit('buildcarousel');
            }, response =>{
                console.log('error ao tentar acessar a api.');
                console.log(response);
            });
        }
    }
}