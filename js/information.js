// eat
let arr = ['麻辣小龙虾', '兰州牛肉面', '器美食府', '火锅', '酸辣粉', '手抓饼', '烤鱼', '外婆拌饭', '麻辣烫', '令雅食府', '猪肚鸡', '冒菜', '外公米线', '品正食府', '烤盘饭'];
let flag = false;
let butDom = document.getElementById("but");//按钮
let resultDom = document.getElementById("result");//结果
let len = arr.length;
//开始
function startF() {
    if (flag) {
        stopF();
        return;
    }
    flag = true;
    butDom.innerText = "停";
    console.log("开始")
    randomF(100);
}
//结束
function stopF() {
    console.log("停");
    randomF(100, true);
}
//随机获取名单
let intT;
function randomF(time, stop) {
    //获取数组随机索引
    let index = Math.floor(Math.random() * len);
    resultDom.innerText = arr[index];
    //清除定时器
    if (intT) {
        clearTimeout(intT);
    }
    //停止
    if (time > 450) {
        flag = false;
        butDom.innerText = "不吃 再来一次";
        return;
    }
    intT = setTimeout(function () {
        if (stop) {
            console.log(time);
            time += 20;
        }
        randomF(time, stop);
    }, time)
}

// 播放器

//播放按钮
let playBut = document.getElementById("play");
//播放器
let myAudio = document.getElementById("myAudio");
//控件
let controlDom = document.getElementById("control");
//音乐信息
let infoBar = document.getElementById("info");
playBut.addEventListener("click", playF);
//点击事件
function playF() {
    //判断当前是否在播放
    let flag = Array.from(controlDom.classList).some(function (item) {
        return item == "active";
    });
    if (flag) {
        //播放中点击暂停
        controlDom.classList.remove("active");
        infoBar.classList.remove("active");
        myAudio.pause();
    } else {
        controlDom.classList.add("active");
        infoBar.classList.add("active");
        myAudio.play();
    }
}