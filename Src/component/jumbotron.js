class jumboList extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="jumbotron">
            <div class="jumbo">
                <img src="./Src/Img/Bogor.png" alt="" class="Logo">
                <h1>Kota Bogor</h1>
            </div>

            <div class="history">
                <div class="history-item">
                    <a href="http://kotabogor.go.id/index.php/page/detail/5/sejarah-bogor#.YJOPwMDivIU"><img
                            src="./Src/Img/Sejarah.png" alt="Sejarah"></a>
                    <h3>Sejarah</h3>
                </div>

                <div class="history-item">
                    <a href="https://www.kotabogor.go.id/index.php/page/detail/25/biografi-walikota"><img
                            src="./Src/Img/Walkot.png" alt="Sejarah"></a>
                    <h3>Walikota</h3>
                </div>

                <div class="history-item">
                    <img src="./Src/Img/Population.png" alt="Sejarah">
                    <h3>Populasi</h3>
                </div>

                <div class="history-item">
                    <a href="https://kotabogor.go.id/"><img src="./Src/Img/Website.png" alt="Sejarah"></a>
                    <h3>Off Website</h3>
                </div>
            </div>
        </div>
        `
    }
};

customElements.define('jumbo-list', jumboList);
export default jumboList;