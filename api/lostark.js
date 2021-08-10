var LOSTARK = {
    PROXY: "https://api.allorigins.win/get?url=",
    PROXY_OFFER: (data) => {
        return JSON.parse(data).contents
    },
    ENCODEURI: true,
    Class: {
        ALL: "",
        BERSERKER: 102,
        DESTROYER: 103,
        WARLORD: 104,
        HOLYKNIGHT: 105,
        ARCANA: 202,
        SUMMONER: 203,
        BARD: 204,
        SORCERESS: 205,
        BATTLEMASTER: 302,
        INFIGHTER: 303,
        SOULMASTER: 304,
        LANCEMASTER: 305,
        STRIKER: 312,
        BLADE: 402,
        DEMONIC: 403,
        REAPER: 404,
        HAWKEYE: 502,
        DEVILHUNTER: 503,
        BLASTER: 504,
        SCOUTER: 505,
        GUNSLINGER: 512
    },
    Category: {
        ALL: [0, 0],
        EQUIP_BOX: [10100, 0],
        AVATAR: {
            ALL: [20000, 0],
            WEAPON: [20000, 20005],
            HEAD: [20000, 20010],
            FACE_PRIMARY: [20000, 20020],
            FACE_SECONDARY: [20000, 20030],
            TOP: [20000, 20050],
            BOTTOM: [20000, 20060],
            SUIT: [20000, 20070],
            INSTRUMENT: [20000, 21400],
            AVATAR_BOX: [20000, 21500]
        },
        ENGRAVING: [40000, 0],
        REINFORCE: {
            ALL: [50000, 0],
            SMELT: [50000, 50010],
            ADDITIONAL: [50000, 50020],
            OTHER: [50000, 51000]
        },
        BATTLE_ITEM: {
            ALL: [60000, 0],
            HEAL: [60000, 60200],
            ATTACK: [60000, 60300],
            FUNCTION: [60000, 60400],
            BUFF: [60000, 60500]
        },
        FOOD: [70000, 0],
        LIVING: {
            ALL: [90000, 0],
            PLANT: [90000, 90200],
            FELLING: [90000, 90300],
            MINING: [90000, 90400],
            HUNTING: [90000, 90500],
            FISHING: [90000, 90600],
            ARCHEOLOGY: [90000, 90700],
            OTHER: [90000, 90800]
        },
        ADVENTURE: [100000, 0],
        VOYAGE: {
            ALL: [110000, 0],
            SHIP_MATERIAL: [110000, 110100],
            SHIP_SKIN: [110000, 110110],
            SHIP_MATERIAL_BOX: [110000, 111900]
        },
        PET: {
            ALL: [140000, 0],
            PET: [140000, 140100],
            PET_BOX: [140000, 140200]
        },
        VEHICLE: {
            ALL: [160000, 0],
            VEHICLE: [160000, 160100],
            VEHICLE_BOX: [160000, 160200]
        },
        OTHER: [170000, 0],
        GEM_BOX: [220000, 0]
    },
    Sort: {
        RANK: {
            UP: 1,
            DOWN: 2
        },
        YAPRICE: {
            UP: 3,
            DOWN: 4
        },
        LSPRICE: {
            UP: 5,
            DOWN: 6
        },
        PRICE: {
            UP: 7,
            DOWN: 8
        }
    },
    Market: {
        Search(name, option){
            var text = []
            var category = option.category ? option.category : [0, 0]
            var sort = option.sort ? option.sort : 0
            var _class = option.class ? option.class : ""
            option.firstCategory = category[0]
            option.secondCategory = category[1]
            option.sortType = sort
            option.characterClass = _class
            for(i in option){
                if(i == "category" || i == "sort" || i == "class") continue
                text.push(i + "=" + option[i])
            }
            return new Promise((resolve)=>{
            LOSTARK.RequestPromise(`https://lostark.game.onstove.com/Market/List_v2?isInit=false&itemName=`+name+"&"+text.join("&"))
            .then((value)=>{
                var span = document.createElement("span")
                span.innerHTML = value;
                var list = [];
                for(let a of span.children[0].children[0].children[3].children){
                    list.push({
                        more: JSON.parse(a.children[0].children[0].children[0].getAttribute("data-key")),
                        img: a.children[0].children[0].children[0].children[0].src,
                        name: a.children[0].children[0].children[1].textContent,
                        count: a.children[0].children[0].children[2] ? a.children[0].children[0].children[2].textContent : "",
                        yaprice: parseInt(a.children[1].children[0].children[0].textContent.replace(/,/gi,"")),
                        lsprice: parseInt(a.children[2].children[0].children[0].textContent.replace(/,/gi,"")),
                        price: parseInt(a.children[3].children[0].children[0].textContent.replace(/,/gi,""))
                    })
                }
                resolve({
                    items: list,
                    currentpage: parseInt(span.children[1].querySelector("em").textContent),
                    pages: parseInt(span.children[1].lastElementChild.onclick ? span.children[1].lastElementChild.onclick.toString().replace("function onclick(event) {\npaging.page(","").replace(");\n}","") : 1)
                })
                span = null;
            })
        })
        }
    },
    RequestPromise(URL){
        return new Promise((resolve, reject)=>{
            var httpRequest;
            httpRequest = new XMLHttpRequest();
            if(httpRequest){
                httpRequest.onreadystatechange = ()=>{
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        if (httpRequest.status === 200) {
                            LOSTARK.PROXY_OFFER ? resolve(LOSTARK.PROXY_OFFER(httpRequest.responseText)) : httpRequest.responseText
                        } else {
                            reject(httpRequest)
                        }
                    }
                };
                httpRequest.open('GET', LOSTARK.PROXY + (LOSTARK.ENCODEURI ? encodeURIComponent(URL): URL));
                httpRequest.send();
            }
        })
    }
}