var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var BASE_API_LINK = "https://api.thedogapi.com/v1";
var fetchDogsss = function () { return __awaiter(_this, void 0, void 0, function () {
    var resp, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(BASE_API_LINK + "/breeds")];
            case 1:
                resp = _a.sent();
                return [4 /*yield*/, resp.json()];
            case 2:
                data = (_a.sent());
                console.log(data);
                popularDogsSelectt(data);
                return [2 /*return*/];
        }
    });
}); };
var popularDogsSelectt = function (breeds) {
    console.log(breeds);
    var select = document.querySelector(".breed-select");
    var breedOptions = breeds.map(function (breed) {
        var option = document.createElement("option");
        option.text = breed.name;
        option.value = String(breed.id);
        return option;
    });
    breedOptions.forEach(function (breedOption) {
        select.append(breedOption);
    });
};
var changeDoggoo = function (event) {
    if (event.target !== null && event.target instanceof HTMLSelectElement) {
        getDogByBreddd(Number(event.target.value));
    }
    else {
        console.error('Ошибка: target равен null или не имеет свойства value');
    }
};
var getDogByBreddd = function (breedId) { return __awaiter(_this, void 0, void 0, function () {
    var data, imageUrl, breeds, resp, respQ, parentElem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(BASE_API_LINK + "/images/search?include_breed=1&breed_id=" + breedId).then(function (data) { return data.json(); })];
            case 1:
                data = (_a.sent())[0];
                imageUrl = data.url, breeds = data.breeds;
                fillDoggoImagee(imageUrl);
                console.log(data);
                return [4 /*yield*/, fetch("https://api.thedogapi.com/v1/images/" + data.id)];
            case 2:
                resp = _a.sent();
                return [4 /*yield*/, resp.json()];
            case 3:
                respQ = _a.sent();
                parentElem = (document.querySelector(".doggo-description").innerHTML = "");
                fillDogDescriptionnn(respQ.breeds[0]);
                return [2 /*return*/];
        }
    });
}); };
fetchDogsss();
var createDogEntireee = function (_a) {
    var label = _a.label, value = _a.value;
    var parentElem = document.querySelector(".doggo-description");
    var descptionItem = document.createElement("dt");
    descptionItem.textContent = label;
    var descriptionValue = document.createElement("dd");
    descriptionValue.textContent = value;
    parentElem.appendChild(descptionItem);
    parentElem.appendChild(descriptionValue);
};
var fillDogDescriptionnn = function (_a) {
    var bredFor = _a.bred_for, bredGroup = _a.breed_group, name = _a.name, temperament = _a.temperament, lifeSpan = _a.life_span, origin = _a.origin, height = _a.height, weight = _a.weight;
    createDogEntireee({
        label: "Name",
        value: name,
    });
    createDogEntireee({
        label: "Bred for",
        value: bredFor,
    });
    createDogEntireee({
        label: "Bred group",
        value: bredGroup,
    });
    createDogEntireee({
        label: "Temperament",
        value: temperament,
    });
    createDogEntireee({
        label: "Life span",
        value: lifeSpan,
    });
    createDogEntireee({
        label: "Origin",
        value: origin,
    });
    createDogEntireee({
        label: "Height [cm]",
        value: height.metric,
    });
    createDogEntireee({
        label: "weight [kg]",
        value: weight.metric,
    });
};
var fillDoggoImagee = function (url) {
    document.querySelector(".doggo").setAttribute("src", url);
};
