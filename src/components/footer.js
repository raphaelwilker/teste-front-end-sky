Vue.component('custom-footer', {
    data: function () {
        return {
            
        }
    },
    template: `<footer class="col-md-12">
    <div class="row">
        <div class="col-md-9">
            <p class="logo">Logo</p>
        </div>
        <div class="col-md-3">
            <p>Redes sociais</p>
        </div>
    </div>
    <div class="row">
    
        <div class="col-md-6">
            <a href="https://www.sky.com.br/app?_ga=2.80459348.29195248.1603336018-475958518.1603336018" title="Baixe no seu celular o app SKY e divirta-se." class="link-minha-sky" data-gtm="1"> 
                <img src="./dist/img/80x80_IMG_SKY_LogoAppSKY_2.png" class="img-minha-sky" alt="Logo app sky, para baixar clique nos links abaixo:"> 
                <div class="SubHeading medium text-download">Baixe no seu celular o app SKY e divirta-se.</div>
            </a>
            <p class="logo_apple">Apps</p>
            <p class="logo_android">Apps</p>
        </div>
        <div  class="col-md-3">
            <p>Sobre
                <ul class="list">
                    <li>Nossa história</li>
                    <li>Imprensa</li>
                    <li>Prêmios conquistados</li>
                    <li>Credenciamento</li>
                    <li>Trabalhe com a gente</li>
                    <li>Promoção</li>
                </ul>
            </p>
            <p>
                Ajuda
                <ul class="list">
                    <li>Central de ajuda</li>
                </ul>
            </p>
        </div>
        <div  class="col-md-3">
            <p>
                Nossas responsabilidades
                <ul class="list">
                    <li>Conselho aos usuários</li>
                    <li>Pesquisa Anatel</li>
                    <li>Relatórios de transparência</li>
                    <li>Responsabilidade Social</li>
                    <li>Acessibilidade</li>
                </ul>
            </p>
            <p>
                Sky Empresas
            </p>
            <p>
                Portal de Negociação
            </p>
        </div>
    </div>
</footer>`
});