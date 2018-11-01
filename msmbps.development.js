class Bar extends React.Component {
    render() {
        return <div className="bar" style={{background: "rgb("+
               (this.props.milliseconds<=0?0:Math.floor(this.props.milliseconds / this.props.maxMilliseconds * 200))+","+
               (this.props.milliseconds<=0?255:Math.floor(255 - this.props.milliseconds / this.props.maxMilliseconds * 128))+","+
               "0)",
               width: (this.props.milliseconds<=0?0:Math.floor(200*(this.props.milliseconds/this.props.maxMilliseconds)))+"px"
               }}></div>;
    }
}
class Milliseconds extends React.Component {
    render() {
        return <span className="milliseconds">{
               this.props.milliseconds==0?"...":
               (this.props.milliseconds<0?-this.props.milliseconds+"/5":this.props.milliseconds+"ms")}
               </span>;
    }
}
class Tip extends React.Component {
    render() {
        return <span className="tip">{this.props.downloadText}</span>;
    }
}
class Name extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const s = this.props.url;
        const i = s.indexOf("://")+3;
        const j = s.indexOf("/",i);
        const server = s.substring(i, j);
        this.props.showNotice(this.props.provider, this.props.locationName, server, this.props.download);
    }
    render() {
        const spanStyle = {
            cursor: (this.props.download==void(0)?"help":"pointer"),
        };
        return <span className="name" onClick={this.handleClick} style={spanStyle}>
               {this.props.locationName}
               <Tip className="tip" downloadText={this.props.download==void(0)?"Show Server":"Server&Download"}/>
               </span>;
    }
}
class Line extends React.Component {
    render() {
        return <div className={"line"}
               style={{transform: "translateY(" + (this.props.index*(18+2)) + "px)",
               zIndex: this.props.number - this.props.index + 1}}>
               <Milliseconds milliseconds={this.props.milliseconds} />
               <Name locationName={this.props.name} download={this.props.download}
               provider={this.props.provider}
               url={this.props.url}
               showNotice={this.props.showNotice} />
               <Bar milliseconds={this.props.milliseconds} maxMilliseconds={this.props.maxMilliseconds} />
               </div>;
    }
}
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {millisecondsOfTargets: new Array(),
                      rankList: new Array()};
        this.data = {img: document.createElement("img"),
                     testTimeOut: false,
                     timeOutId: null,
                     currentIndex: 0,
                     countOfLoad: 0,
                     startTime: 0,
                     endTime: 0,
                     minOfCurrentTarget: 60000};
        document.body.appendChild(this.data.img);
        this.lineRef = new Array();
        for(let i=0;i<=Object.keys(this.props.targets).length-1;i++) {
            this.lineRef[i] = React.createRef();
        }
        for(let i=0;i<=Object.keys(this.props.targets).length-1;i++) {
            this.state.millisecondsOfTargets[i] = 0;
        }
        for(let i=0;i<=Object.keys(this.props.targets).length-1;i++) {
            this.state.rankList[i] = {id: i, rank: i, milliseconds: 60000+i};
        }
        this.onTimeOut = this.onTimeOut.bind(this);
        this.onLoaded = this.onLoaded.bind(this);
    }
    updateCount() {
        let newMillisecondsOfTargets = this.state.millisecondsOfTargets.slice();
        newMillisecondsOfTargets[this.data.currentIndex]=-this.data.countOfLoad;
        this.setState({millisecondsOfTargets:newMillisecondsOfTargets});
    }
    onTimeOut() {
        const callback = this.data.img.onerror;
        this.data.img.onerror=null;
        this.data.img.src = "";
        setTimeout(callback, 1);
    }
    clearThisTimeOut() {
        try {
            clearTimeout(this.data.timeOutId);
        }
        catch(e) {
            console.log("clearThisTimeOut ERROR");
        }
    }
    prepareTimeOut() {
        this.clearThisTimeOut();
        this.data.timeOutId = setTimeout(this.onTimeOut, 6000);
    }
    doNextTest() {
        const currentLine = this.lineRef[this.data.currentIndex];
        this.data.countOfLoad++;
        this.updateCount();
        this.data.startTime = new Date().getTime();
        this.data.img.onerror = this.onLoaded;
        this.prepareTimeOut();
        if(!this.data.testTimeOut) {
            this.data.img.src = currentLine.current.props.url+Math.random();
        }
    }
    doNextTarget() {
        this.data.currentIndex++;
        if(this.data.currentIndex>this.lineRef.length-1) {
            this.props.providerFinished();
            this.clearThisTimeOut();
            return;
        }
        const currentLine = this.lineRef[this.data.currentIndex];
        this.data.countOfLoad = 1;
        this.updateCount();
        this.data.startTime = new Date().getTime();
        this.data.img.onerror = this.onLoaded;
        this.prepareTimeOut();
        if(!this.data.testTimeOut) {
            this.data.img.src = currentLine.current.props.url+Math.random();
        }
    }
    onLoaded () {
        if(this.data.countOfLoad==1) {
            this.doNextTest();
            return;
        }
        this.data.endTime = new Date().getTime();
        const currentCostOfTime = this.data.endTime - this.data.startTime;
        if(currentCostOfTime<this.data.minOfCurrentTarget) {
            this.data.minOfCurrentTarget = currentCostOfTime;
        }
        if(this.data.countOfLoad==5){
            let newMillisecondsOfTargets = this.state.millisecondsOfTargets.slice();
            newMillisecondsOfTargets[this.data.currentIndex]=this.data.minOfCurrentTarget;
            this.setState({millisecondsOfTargets:newMillisecondsOfTargets});
            let newRankListWithNewData = JSON.parse(JSON.stringify(this.state.rankList));
            newRankListWithNewData[this.data.currentIndex].milliseconds=this.data.minOfCurrentTarget;
            let newRankListSort = JSON.parse(JSON.stringify(newRankListWithNewData));
            newRankListSort.sort(function (a,b) {
                return a.milliseconds - b.milliseconds;
            });
            let newRankListForUpdate = JSON.parse(JSON.stringify(newRankListWithNewData));
            for(let i=0;i<=newRankListForUpdate.length-1;i++) {
                const currentId=newRankListForUpdate[i].id;
                for(let j=0;j<=newRankListSort.length;j++) {
                    if(currentId==newRankListSort[j].id) {
                        newRankListForUpdate[i].rank = j;
                        break;
                    }
                }
            }
            this.setState({rankList: newRankListForUpdate});
            this.data.minOfCurrentTarget=60000;
            this.doNextTarget();
            return;
        }
        this.doNextTest();
    }
    componentDidMount() {
        const currentLine = this.lineRef[this.data.currentIndex];
        this.data.countOfLoad = 1;
        this.updateCount();
        this.data.startTime = new Date().getTime();
        this.data.img.onerror = this.onLoaded;
        this.prepareTimeOut();
        if(!this.data.testTimeOut) {
            this.data.img.src = currentLine.current.props.url+Math.random();
        }
    }
    render() {
        return <div className={"list"}>{this.props.targets.map(function (item,index){
            return <Line
                   name={item.name}
                   key={index}
                   url={item.url}
                   download={item.download}
                   milliseconds={this.state.millisecondsOfTargets[index]}
                   maxMilliseconds={Math.max(...this.state.millisecondsOfTargets)}
                   index={this.state.rankList[index].rank}
                   number={this.state.rankList.length}
                   provider={this.props.provider}
                   showNotice={this.props.showNotice}
                   ref={this.lineRef[index]} />;
        }.bind(this))}</div>;
    }
}
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.reload=this.reload.bind(this);
    }
    reload() {
        location.reload();
    }
    render() {
        return <div className={"message"}
               style={{visibility: this.props.messageVisible?"visible":"hidden"}}>
               During download, ping might not be precise.<br /><br />
               <div style={{textAlign: "center"}}>
               <a className={"larger"} href={'javascript:void(0);'} onClick={this.reload}>Reload</a>
               <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
               <a className={"larger"} href={'javascript:void(0);'} onClick={this.props.hideMessage}>Close</a>
               </div></div>;
    }
}
class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick() {
        if(this.props.clickedDownload==void(0)){
            return;
        }
        if(!this.props.allProvidersFinished()) {
            this.props.showMessage();
        }
        window.open(this.props.clickedDownload, "_blank");
    }
    render() {
        return <div className={"notice"}
               style={{visibility: this.props.noticeVisible?"visible":"hidden"}}>
               <span className={"bold"}>{this.props.clickedProvider}</span><br />
               {this.props.clickedName} <br />
               <a className={"larger"} href={"javascript:void(0)"} onClick={this.handleClick}>{this.props.clickedDownload==void(0)?"No Download":"Test Download"}</a><br /><br />
               <textarea className={"server"} readOnly={true}
               value={this.props.clickedServer}></textarea>
               <div>
               <span style={{fontStyle: "italic"}}>Copy server address<br />for further testing</span><br /><br />
               <a className={"larger"} href={'javascript:void(0);'} onClick={this.props.hideNotice}>Close</a>
               </div></div>;
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {allData: data, messageVisible: false, noticeVisible: false,
                      clickedProvider: "", clickedName: "", clickedServer: "", clickedDownload: ""};
        this.data = {countOfFinishedProviders: 0};
        this.providerFinished=this.providerFinished.bind(this);
        this.allProvidersFinished=this.allProvidersFinished.bind(this);
        this.showMessage=this.showMessage.bind(this);
        this.hideMessage=this.hideMessage.bind(this);
        this.showNotice=this.showNotice.bind(this);
        this.hideNotice=this.hideNotice.bind(this);
    }
    providerFinished() {
        this.data.countOfFinishedProviders++;
    }
    allProvidersFinished() {
        return (this.data.countOfFinishedProviders==Object.keys(this.state.allData).length);
    }
    showMessage() {
        this.setState({messageVisible: true});
    }
    hideMessage() {
        this.setState({messageVisible: false});
    }
    showNotice(clickedProvider, clickedName, clickedServer, clickedDownload) {
        function selectServerText() {
            const a = document.getElementsByClassName("server");
            for(let i=0; i<=a.length-1;i++) {
                a[i].select();
            }
        }
        this.setState({clickedProvider: clickedProvider, clickedName: clickedName,
                       clickedServer: clickedServer, clickedDownload: clickedDownload,
                       noticeVisible: true});
        setTimeout(selectServerText, 500);
    }
    hideNotice() {
        this.setState({noticeVisible: false});
    }
    render() {
        return <div><Message messageVisible={this.state.messageVisible} hideMessage={this.hideMessage} />
               <Notice noticeVisible={this.state.noticeVisible} hideNotice={this.hideNotice}
                allProvidersFinished={this.allProvidersFinished}
                showMessage={this.showMessage}
                clickedProvider={this.state.clickedProvider}
                clickedName={this.state.clickedName}
                clickedServer={this.state.clickedServer}
                clickedDownload={this.state.clickedDownload} />
               {Object.keys(this.state.allData).map(function (item, index){
                   const sectionStyle = {height: this.state.allData[item].length*(18+2) + 30 + "px"};
                   return (
                       <div className={"section"} key={index} style={sectionStyle}><h3>{item}</h3>
                       <List
                       provider={item}
                       providerFinished={this.providerFinished}
                       showNotice={this.showNotice}
                       targets={this.state.allData[item]}/></div>
                   );
               }.bind(this))}</div>;
    }
}
function main() {
    ReactDOM.render(<App />, document.getElementById("result"));
}