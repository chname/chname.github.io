let options =
    `<option value="0">-</option> <option value="255">각성</option> <option value="286">갈증</option> <option value="243">강령술</option> <option value="129">강화 무기</option> <option value="242">강화 방패</option> <option value="288">결투의 대가</option> <option value="225">고독한 기사</option> <option value="125">광기</option> <option value="188">광전사의 비기</option> <option value="134">구슬동자</option> <option value="123">굳은 의지</option> <option value="190">극의: 체술</option> <option value="142">급소 타격</option> <option value="249">기습의 대가</option> <option value="199">넘치는 교감</option> <option value="287">달의 소리</option> <option value="238">달인의 저력</option> <option value="254">돌격대장</option> <option value="258">두 번째 동료</option> <option value="168">마나 회복 증가</option> <option value="251">마나의 흐름</option> <option value="281">멈출 수 없는 충동</option> <option value="253">바리케이드</option> <option value="279">버스트</option> <option value="246">번개의 분노</option> <option value="245">부러진 뼈</option> <option value="196">분노의 망치</option> <option value="236">분쇄의 주먹</option> <option value="235">불굴</option> <option value="290">사냥의 시간</option> <option value="198">상급 소환사</option> <option value="244">선수필승</option> <option value="256">세맥타통</option> <option value="121">슈퍼 차지</option> <option value="248">승부사</option> <option value="237">실드 관통</option> <option value="282">심판자</option> <option value="284">아르데타인의 기술</option> <option value="111">안정된 상태</option> <option value="107">약자 무시</option> <option value="110">에테르 강화</option> <option value="239">여신의 가호</option> <option value="257">역천지체</option> <option value="193">연속 포격</option> <option value="141">예리한 둔기</option> <option value="127">오의 강화</option> <option value="292">오의난무</option> <option value="280">완벽한 억제</option> <option value="118">원한</option> <option value="140">위기 모면</option> <option value="291">일격필살</option> <option value="278">잔재된 기운</option> <option value="247">저주받은 인형</option> <option value="224">전투 태세</option> <option value="195">절실한 구원</option> <option value="276">절정</option> <option value="277">절제</option> <option value="109">정기 흡수</option> <option value="259">죽음의 습격</option> <option value="240">중갑 착용</option> <option value="197">중력 수련</option> <option value="194">진실된 용맹</option> <option value="285">진화의 유산</option> <option value="189">초심</option> <option value="167">최대 마나 증가</option> <option value="283">축복의 오라</option> <option value="191">충격 단련</option> <option value="202">탈출의 명수</option> <option value="241">폭발물 전문가</option> <option value="289">피스메이커</option> <option value="192">핸드거너</option> <option value="130">화력 강화</option> <option value="201">황제의 칙령</option> <option value="200">황후의 은총</option>`;
let options_def =
    `<option value="0">-</option> <option value="255">각성</option> <option value="243">강령술</option> <option value="242">강화 방패</option> <option value="288">결투의 대가</option> <option value="134">구슬동자</option> <option value="123">굳은 의지</option> <option value="142">급소 타격</option> <option value="249">기습의 대가</option> <option value="238">달인의 저력</option> <option value="254">돌격대장</option> <option value="168">마나 회복 증가</option> <option value="251">마나의 흐름</option> <option value="253">바리케이드</option> <option value="246">번개의 분노</option> <option value="245">부러진 뼈</option> <option value="236">분쇄의 주먹</option> <option value="235">불굴</option> <option value="244">선수필승</option> <option value="121">슈퍼 차지</option> <option value="248">승부사</option> <option value="237">실드 관통</option> <option value="111">안정된 상태</option> <option value="107">약자 무시</option> <option value="110">에테르 강화</option> <option value="239">여신의 가호</option> <option value="141">예리한 둔기</option> <option value="118">원한</option> <option value="140">위기 모면</option> <option value="247">저주받은 인형</option> <option value="109">정기 흡수</option> <option value="240">중갑 착용</option> <option value="167">최대 마나 증가</option> <option value="202">탈출의 명수</option> <option value="241">폭발물 전문가</option>`;
let levels =
    `<option value="0">-</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option>`;
let alevels =
    `<option value="0">0</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option>`;
let teuks =
    `<option value="-1">-</option> <option value="0">치명</option> <option value="1">특화</option> <option value="2">제압</option> <option value="3">신속</option> <option value="4">인내</option> <option value="5">숙련</option>`;
let engraves = {
    11: "3332",
    12: "3333",
    13: "33331",
    14: "33332",
    15: "33333",
    16: "333331"
}
let abneed = [[{ 3: 0, 5: 0 }], [{ 3: 0, 5: 0 }]]
var stoner = 0;
var stones = [0, 0, 0];
var engrave = 12;
let isOK = () => {
    let plus = 0
    for (let i = 1; i <= 6; i++) {
        plus += parseInt(document.querySelector("#engv-level-" + i).value);
    }
    console.log(plus, stoner)
    document.querySelector("#po-engrave").textContent = engrave < plus ? "없" : "있"
    document.querySelector("#gr").classList = engrave < plus ? "red" : "green"
}
let stone = (what, much) => {
    if (much == "8") much = 7
    stones[what] = parseInt(much);
    stoner = stones[0] + stones[1]
    for (let i = 0; i <= 1; i++) {
        if (stones[i] == 0) {
            abneed[i] = [{ 3: 0, 5: 3 }, { 3: 5, 5: 0 }]
        } else if (stones[i] == 1) {
            abneed[i] = [{ 3: 3, 5: 1 }]
        } else if (stones[i] == 2) {
            abneed[i] = [{ 3: 1, 5: 2 }]
        } else if (stones[i] == 3) {
            abneed[i] = [{ 3: 4, 5: 0 }]
        } else if (stones[i] == 4) {
            abneed[i] = [{ 3: 2, 5: 1 }]
        } else if (stones[i] == 5) {
            abneed[i] = [{ 3: 0, 5: 2 }]
        } else if (stones[i] == 6) {
            abneed[i] = [{ 3: 3, 5: 0 }]
        } else if (stones[i] == 7 || stones[i] == 8) {
            abneed[i] = [{ 3: 1, 5: 1 }]
        } else if (stones[i] == 9) {
            abneed[i] = [{ 3: 2, 5: 0 }]
        } else if (stones[i] == 10) {
            abneed[i] = [{ 3: 0, 5: 1 }]
        }
    }

    let type = 0;
    if (stoner == 0) {
        engrave = 12
        type = 1
    } else if (stoner >= 1 && stoner < 4) {
        engrave = 13
        type = 2
    } else if (stoner == 4 || stoner == 5) {
        engrave = 13
        type = 1
    } else if (stoner >= 6 && stoner < 9) {
        engrave = 14
        type = 2
    } else if (stoner == 9 || stoner == 10) {
        engrave = 14
        type = 1
    } else if (stoner >= 11 && stoner < 14) {
        engrave = 15
        type = 2
    } else if (stoner == 14 || stoner == 15) {
        engrave = 15
        type = 1
    } else if (stoner >= 16 && stoner < 19) {
        engrave = 16
        type = 2
    } else if (stoner >= 19) {
        engrave = 16
        type = 1
    }
    let t = ["(영웅 2개)", "(영웅 1개, 전설 1개)", "(전설 2개)"]
    if (engraves.hasOwnProperty(engrave)) {
        document.getElementById('max-engv').textContent = engraves[engrave] + "입니다. " + t[type]
    } else {
        document.getElementById('max-engv').textContent = "-"
    }
    isOK()
}
var teukss = [-1, -1, -1];
var teukset = [
    `<option value="1">1500 : 500</option> <option value="2">1300 : 700</option> <option value="3">1200 : 800</option> <option value="4">1100 : 900</option> <option value="5">1000 : 1000</option>`,
    `<option value="6">1000 : 500 : 500</option> <option value="7">1000 : 700 : 300</option> <option value="8">1000 : 800 : 200</option> <option value="9">1200 : 500 : 300</option> <option value="10">1300 : 500 : 200</option> <option value="11">1000 : 300 : 700</option> <option value="12">1000 : 200 : 800</option> <option value="13">1200 : 300 : 500</option> <option value="14">1300 : 200 : 500</option>`
];
let teuk = (what, choose) => {
    teukss[what] = choose;
    if (teukss[0] != -1 && teukss[1] != -1 && teukss[2] != -1)
        document.querySelector("#biyul").innerHTML = teukset[1]
    else
        document.querySelector("#biyul").innerHTML = teukset[0]
}
window.onload = () => {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('engv-' + i).innerHTML = options;
        document.getElementById('engv-level-' + i).innerHTML = levels;
    }
    for (let i = 1; i <= 2; i++) {
        document.getElementById('stoneP' + i).innerHTML = options_def;
        document.getElementById('stoneP' + i + '-L').innerHTML = alevels;
    }
    for (let i = 1; i <= 3; i++) {
        document.getElementById('teuk-' + i).innerHTML = teuks;
    }
    document.getElementById('stoneM1-L').innerHTML = alevels;
    location.href.split("?").length == 1 ? null : _import(location.href.split("?")[1].replace("val=", ""))
}
let search = () => {
    var engv = [];
    for(var i=1; i<=6; i++)
        engv.push({
            engrave: document.querySelector('#engv-'+i).value,
            level: document.querySelector('#engv-level-'+i).value
        })
    accSearch(engv, 
    {
        P1: {engrave: document.querySelector('#stoneP1').value,
             level: document.querySelector('#stoneP1-L').value},
        P2: {engrave: document.querySelector('#stoneP2').value,
        level: document.querySelector('#stoneP2-L').value},
        M1: {engrave: document.querySelector('#stoneM1').value,
        level: document.querySelector('#stoneM1-L').value}
    }, {
        main: document.querySelector('#teuk-1').value,
        sub: document.querySelector('#teuk-2').value,
        dust: document.querySelector('#teuk-3').value,
        ratio: document.querySelector('#biyul').value
    }).then((data)=>{

    })
}
let _export = (shutup = null) => {
    var result = [
        document.querySelector('#engv-1').value,
        document.querySelector('#engv-2').value,
        document.querySelector('#engv-3').value,
        document.querySelector('#engv-4').value,
        document.querySelector('#engv-5').value,
        document.querySelector('#engv-6').value,
        document.querySelector('#engv-level-1').value,
        document.querySelector('#engv-level-2').value,
        document.querySelector('#engv-level-3').value,
        document.querySelector('#engv-level-4').value,
        document.querySelector('#engv-level-5').value,
        document.querySelector('#engv-level-6').value,
        document.querySelector('#stoneP1').value,
        document.querySelector('#stoneP2').value,
        document.querySelector('#stoneM1').value,
        document.querySelector('#stoneP1-L').value,
        document.querySelector('#stoneP2-L').value,
        document.querySelector('#stoneM1-L').value,
        document.querySelector('#teuk-1').value,
        document.querySelector('#teuk-2').value,
        document.querySelector('#teuk-3').value,
        document.querySelector('#biyul').value
    ]
    result = result.map(v => parseInt(v))
    let res = btoa(JSON.stringify(result).replace("[", "").replace("]", ""))
    if (shutup != null)
        return res;
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = res;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert("복사 되었습니다.")
}
let _import = (val = null) => {
    var value = val == null ? prompt("설정을 붙여넣기 하세요.") : val
    var json = JSON.parse("[" + atob(value) + "]")
    document.querySelector('#engv-1').value = json[0]
    document.querySelector('#engv-2').value = json[1]
    document.querySelector('#engv-3').value = json[2]
    document.querySelector('#engv-4').value = json[3]
    document.querySelector('#engv-5').value = json[4]
    document.querySelector('#engv-6').value = json[5]
    document.querySelector('#engv-level-1').value = json[6]
    document.querySelector('#engv-level-2').value = json[7]
    document.querySelector('#engv-level-3').value = json[8]
    document.querySelector('#engv-level-4').value = json[9]
    document.querySelector('#engv-level-5').value = json[10]
    document.querySelector('#engv-level-6').value = json[11]
    document.querySelector('#stoneP1').value = json[12]
    document.querySelector('#stoneP2').value = json[13]
    document.querySelector('#stoneM1').value = json[14]
    document.querySelector('#stoneP1-L').value = json[15]
    document.querySelector('#stoneP2-L').value = json[16]
    stone(0, json[15])
    stone(1, json[16])
    document.querySelector('#stoneM1-L').value = json[17]
    document.querySelector('#teuk-1').value = json[18]
    document.querySelector('#teuk-2').value = json[19]
    document.querySelector('#teuk-3').value = json[20]
    teukss[0] = json[18]
    teukss[1] = json[19]
    teukss[2] = json[20]
    document.querySelector('#biyul').value = json[21]
    isOK()
}
let _share = () => {
    var a = _export(true)
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = location.protocol + '//' + location.host + location.pathname + "?val=" + a;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert("URL 복사 완료")
}