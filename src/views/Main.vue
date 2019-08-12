<template>
<div>

    <h3>Щебень</h3>
    <p>гранитный марки 1200 по прочности при раздавливании в цилиндре.</p>

    <div class="table-responsive" style="max-width:700px;">
    <table class="table table-bordered table-hover">
        <thead class="thead-light">
        <tr>
            <th rowspan="2">Показатели</th>
            <th colspan="6">Размеры отверстий сит, мм</th>
        </tr>
        <tr>
            <th>40</th>
            <th>20</th>
            <th>15</th>
            <th>10</th>
            <th>5</th>
            <th>&lt;5</th>
        </tr>
        </thead>
        <tr>
            <td>Частные остатки, %</td>
            <td><input type="number" v-model.number="crushedStone.partial['40']"></td>
            <td><input type="number" v-model.number="crushedStone.partial['20']"></td>
            <td><input type="number" v-model.number="crushedStone.partial['15']"></td>
            <td><input type="number" v-model.number="crushedStone.partial['10']"></td>
            <td><input type="number" v-model.number="crushedStone.partial['5']"></td>
            <td><input type="number" v-model.number="crushedStone.partial['2.5']"></td>
        </tr>
        <tr v-if="mess.i">
            <td>Полные остатки, %</td>
            <td>{{crushedStone.full['40']}}</td>
            <td>{{crushedStone.full['20']}}</td>
            <td>{{crushedStone.full['15']}}</td>
            <td>{{crushedStone.full['10']}}</td>
            <td>{{crushedStone.full['5']}}</td>
            <td>{{crushedStone.full['2.5']}}</td>
        </tr>
    </table>
    </div>

    <h3>Песок</h3>
    <p>речной</p>

    <div class="table-responsive" style="max-width:700px;">
    <table class="table table-bordered table-hover">
        <thead class="thead-light">
        <tr>
            <th rowspan="2">Показатели</th>
            <th colspan="8">Размеры отверстий сит, мм</th>
        </tr>
        <tr>
            <th>5</th>
            <th>2,5</th>
            <th>1,25</th>
            <th>0,63</th>
            <th>0,315</th>
            <th>0,16</th>
            <th>0,071</th>
            <th>&lt;0,071</th>
        </tr>
        </thead>
        <tr>
            <td>Частные остатки, %</td>
            <td><input type="number" v-model.number="sand.partial['5']"></td>
            <td><input type="number" v-model.number="sand.partial['2.5']"></td>
            <td><input type="number" v-model.number="sand.partial['1.25']"></td>
            <td><input type="number" v-model.number="sand.partial['0.63']"></td>
            <td><input type="number" v-model.number="sand.partial['0.315']"></td>
            <td><input type="number" v-model.number="sand.partial['0.16']"></td>
            <td><input type="number" v-model.number="sand.partial['0.071']"></td>
            <td><input type="number" v-model.number="sand.partial['0.070']"></td>
        </tr>
        <tr v-if="mess.i">
            <td>Полные остатки, %</td>
            <td>{{sand.full['5']}}</td>
            <td>{{sand.full['2.5']}}</td>
            <td>{{sand.full['1.25']}}</td>
            <td>{{sand.full['0.63']}}</td>
            <td>{{sand.full['0.315']}}</td>
            <td>{{sand.full['0.16']}}</td>
            <td>{{sand.full['0.071']}}</td>
            <td>{{sand.full['0.070']}}</td>
        </tr>
    </table>
    </div>

    <h3>Минеральный порошок</h3>
    <p>известняковый</p>

    <div class="table-responsive" style="max-width:700px;">
    <table class="table table-bordered table-hover">
        <thead class="thead-light">
        <tr>
            <th rowspan="2">Показатели</th>
            <th colspan="6">Размеры отверстий сит, мм</th>
        </tr>
        <tr>
            <th>1,25</th>
            <th>0,63</th>
            <th>0,315</th>
            <th>0,16</th>
            <th>0,071</th>
            <th>&lt;0,071</th>
        </tr>
        </thead>
        <tr>
            <td>Частные остатки, %</td>
            <td><input type="number" v-model.number="mineralPowder.partial['1.25']"></td>
            <td><input type="number" v-model.number="mineralPowder.partial['0.63']"></td>
            <td><input type="number" v-model.number="mineralPowder.partial['0.315']"></td>
            <td><input type="number" v-model.number="mineralPowder.partial['0.16']"></td>
            <td><input type="number" v-model.number="mineralPowder.partial['0.071']"></td>
            <td><input type="number" v-model.number="mineralPowder.partial['0.070']"></td>
        </tr>
        <tr v-if="mess.i">
            <td>Полные остатки, %</td>
            <td>{{mineralPowder.full['1.25']}}</td>
            <td>{{mineralPowder.full['0.63']}}</td>
            <td>{{mineralPowder.full['0.315']}}</td>
            <td>{{mineralPowder.full['0.16']}}</td>
            <td>{{mineralPowder.full['0.071']}}</td>
            <td>{{mineralPowder.full['0.070']}}</td>
        </tr>
    </table>
    </div>



    <h3>Асфальтобетон</h3>
    <p>тип Б марки I непрерывной гранулометрии, предназначенного для верхнего слоя покрытия автомобильной дороги II категории во II дорожно-климатической зоне</p>

    <h3>Битум</h3>
    <p>    
        <select v-model="selectedBitumenTypeK">
            <option disabled value="">Выберите</option>
            <option v-for="item of bitumenType" :key="item.mark" :value="item.k">{{item.mark}}</option>
        </select>
        <span> k = {{ selectedBitumenTypeK }}</span>
    </p>

    <div>
        <button class="btn btn-primary" @click="calculate()">Рассчитать</button>
    </div>
    
  
        <div class="alert alert-warning" style="margin-top:20px;" role="alert" v-if="error.currentCode">
            {{error.getErrorMess}}
        </div>
        <div class="alert alert-success" style="margin-top:20px;" role="alert" v-else-if="error.currentCode === 0 && mess.i">
            Расчет произведен усспешно.
        </div>


    <div v-show="mess.i">

    <hr>

    <h3>Результаты</h3>

    <div class="table-responsive">
    <table class="table table-bordered table-hover">
        <caption>Таблица 4.4 {{mess['mess']}}</caption>
        <thead class="thead-light">
        <tr>
            <th rowspan="2">Размер частиц, мм</th>
            <th colspan="3">Гранулометрический состав исходных материалов, частные остатки, %</th>
            <th colspan="3">Гранулометрический состав материалов в проектируемой смеси, частные остатки, %</th>
            <th rowspan="2">Сумма частных остатков на ситах в проект. смеси, %</th>
            <th rowspan="2">Полные остатки на ситах в проект. смеси, %</th>
            <th rowspan="2">Полные проходы, %</th>
            <th colspan="2">Рекомендуемые пределы по ГОСТ 9128-97, %</th>
        </tr>
        <tr>
            <th class="vertical-text">
                <p>Щебень</p>
            </th>
            <th class="vertical-text">
                <p>Песок</p>
            </th>
            <th class="vertical-text">
                <p>Порошок</p>
            </th>
            <th class="vertical-text">
                 <p>Щебень</p>
            </th>
            <th class="vertical-text">
                <p>Песок</p>
            </th>
            <th class="vertical-text">
                <p>Порошок</p>
            </th>
            <th>В полных остатках</th>
            <th>В полныx проходах</th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="key of keyMap" :key="key" :class="keyMapBad.indexOf(key)!=-1 && key!='0.070'? 'bg-danger':''">
            <td>
                <span v-if="key == '0.070'">&lt; 0.071</span>
                <span v-else>{{key}}</span>
            </td>
            <td>{{crushedStone.partial[key]}}</td> 
            <td>{{sand.partial[key]}}</td> 
            <td>{{mineralPowder.partial[key]}}</td> 
            <td>{{crushedStone.partialInDesignMix[key]}}</td> 
            <td>{{sand.partialInDesignMix[key]}}</td> 
            <td>{{mineralPowder.partialInDesignMix[key]}}</td> 
            <td>{{sumOfPartialLeftovers[key]}}</td> 
            <td>{{fullLeftovers[key]}}</td> 
            <td>{{fullWalkways[key]}}</td>
            <td>{{GOST_fullLeftovers[key][0]}} - {{GOST_fullLeftovers[key][1]}}</td> 
            <td>{{GOST_fullWalkways[key][0]}} - {{GOST_fullWalkways[key][1]}}</td>
        </tr>        

        <tr>
            <td>Итого</td>
            <td></td> 
            <td></td> 
            <td></td> 
            <td>{{crushedStone.number}}</td> 
            <td>{{sand.number}}</td> 
            <td>{{mineralPowder.number}}</td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
            <td></td> 
        </tr>
    </tbody>
    </table>
    </div>

    <h3>Гранулометрический состав горячей асфальтобетонной смеси (нерпрерывные плотные), ГОСТ 9128-97. График.</h3>

    <canvas id="myChart"></canvas>

    <div v-show="keyMapBad.length" class="alert alert-warning" style="margin-top:20px;" role="alert">
        {{error.getErrorMess}}
    </div>

    <div v-show="!keyMapBad.length">
        <h3>Расход битума</h3>

        <div class="table-responsive">
        <table class="table table-bordered table-hover table-responsive">
            <thead class="thead-light">
            <tr>
                <th rowspan="2">Фракция, мм</th>
                <th colspan="3">Расход материалов, частные остатки от целого</th>
                <th colspan="3">Удельная битумоемкость, %</th>
                <th rowspan="2">Расход битума по фракциям смеси, %</th>
            </tr>
            <tr>
                <th class="vertical-text">
                    <p>Щебень</p>
                </th>
                <th class="vertical-text">
                    <p>Песок</p>
                </th>
                <th class="vertical-text">
                    <p>Порошок</p>
                </th>
                <th class="vertical-text">
                        <p>Щебень</p>
                </th>
                <th class="vertical-text">
                    <p>Песок</p>
                </th>
                <th class="vertical-text">
                    <p>Порошок</p>
                </th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(key, i) in keyMap" :key="key">
                    <td>
                        <span v-if="i===0">
                        {{key+'-40'}}
                        </span>
                        <span v-else-if="key == '0.070'">
                        &lt; 0.071
                        </span>
                        <span v-else>
                        {{key+'-'+keyMap[i-1]}}  
                        </span>
                    </td>
                    <td>{{crushedStone.consumptionOfMaterials[key]}}</td>
                    <td>{{sand.consumptionOfMaterials[key]}}</td>
                    <td>{{mineralPowder.consumptionOfMaterials[key]}}</td>
                    <td>{{crushedStone.specificВitumen[key]}}</td>
                    <td>{{sand.specificВitumen[key]}}</td>
                    <td>{{mineralPowder.specificВitumen[key]}}</td>
                    <td>
                        {{bitumenConsumption[key][0]}} 
                        <span v-if="bitumenConsumption[key][1]">+ {{bitumenConsumption[key][1]}}</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="7">Итого:</td>
                    <td>{{bitumenConsumptionSum}}</td>
                </tr>
            </tbody>
        </table>
        </div>

        <div>
            С учетом коэфицента k = {{selectedBitumenTypeK}} количество битума в асфальтобетонной смеси = {{bitumenConsumptionEndSum}} %
        </div>

        <div>
            <h3>Итоговый состав А/Б смеси:</h3>
            <p>
                <strong>Щебень:</strong> {{crushedStone.number}} % <br>
                <strong>Песок:</strong> {{sand.number}} % <br>
                <strong>Минеральный порошок:</strong> {{mineralPowder.number}} % <br>
                <strong>Битум:</strong> {{bitumenConsumptionEndSum}} % <br>
            </p>
        </div>

    </div>

    </div>

</div>

</template>

<style lang="scss">

$inp-w:40px;

input[type="text"], input[type="number"]{
    width:$inp-w;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
input[type="number"]:hover,
input[type="number"]:focus {
  -moz-appearance: number-input;
}

</style>

<script>

import pattern from 'patternomaly/dist/patternomaly.js'

export default {
  data(){
      return{
          crushedStone: {
              partial:{
                  '40':0,
                  '20':8.3,
                  '15':21.5,
                  '10':35.2,
                  '5':32.4,
                  '2.5':2.6
              },
              full:{},
              partialInDesignMix:{},
              consumptionOfMaterials:{},
              specificВitumen:{ //Данные из ГОСТ!
                  '20':4.2,
                  '15':4.5,
                  '10':4.7,
                  '5':5.2,
                  '2.5':5.6
              },
              number: 0
          },
          sand:{
              partial:{
                  '5':9.8,
                  '2.5':14,
                  '1.25':16,
                  '0.63':20.9,
                  '0.315':20.6,
                  '0.16':13.6,
                  '0.071':3.4,
                  '0.070':1.7
              },
              full:{},
              partialInDesignMix:{},
              consumptionOfMaterials:{},
              specificВitumen:{ //Данные из ГОСТ!
                  '5':2.9,
                  '2.5':3.3,
                  '1.25':3.8,
                  '0.63':4.6,
                  '0.315':4.8,
                  '0.16':6.1,
                  '0.071':7,
                  '0.070':14
              },
              number: 0
          },
          mineralPowder:{
              partial:{
                  '1.25':0.9,
                  '0.63':2.8,
                  '0.315':8.2,
                  '0.16':8.5,
                  '0.071':7.6,
                  '0.070':72
              },
              full:{},
              partialInDesignMix:{},
              consumptionOfMaterials:{},
              specificВitumen:{ //Данные из ГОСТ!
                  '1.25':5.3,
                  '0.63':6.0,
                  '0.315':7.0,
                  '0.16':7.3,
                  '0.071':9.4,
                  '0.070':16
              },
              number: 0
          },
          sumOfPartialLeftovers:{},
          fullLeftovers:{},
          fullWalkways:{},
          bitumenConsumption:{},
          bitumenConsumptionSum:0,
          bitumenConsumptionEndSum:0,
          bitumenType:[
            { 
             mark: 'БНД 40/60',
             k: 1.10
            },
            { 
             mark: 'БНД 60/90',
             k: 1.05
            },
            { 
             mark: 'БНД 90/130',
             k: 1
            },
            { 
             mark: 'БНД 130/200',
             k: 0.95
            },
            { 
             mark: 'БНД 200/300',
             k: 0.90
            },
          ],
          selectedBitumenTypeK:0,
          GOST_fullLeftovers:{},
          GOST_fullWalkways:{},
          keyMap:[],
          keyMapBad:[],
          keyMapBitum:[],
          mess:{
              i:0,
              mess:''
          },
          error:{
              messages:[
              {
                  code:0,
                  message: 'Ошибок нет.'
              },
              {
                  code:1,
                  message(info){return 'Гранулометрический состав '+info+' введен некорректно. Сумма частных остатков должна быть 100%.'}
              },
              {
                  code:2,
                  message: 'Данный гранулометрический состав является не оптимальным. Измените частные остатки.'
              }],
              currentCode: 0,
              infoData:'',
              get getErrorMess(){
                  const obj = this.messages.find(message => message.code === this.currentCode);
                  return this.infoData !== '' ? obj.message(this.infoData): obj.message;
              }
          },
          myChart:''
      }
  },
  methods:{

      floor(num, decimals=1){
          //return Math.floor(num * 10) / 10;
        return Number(Math.round(num+'e'+decimals)+'e-'+decimals);
      },
      lastSum(obj){

        const obj_keys = Object.keys(obj).sort((a, b) => b-a);

        let rtnObj = {};

        obj_keys.forEach((key, i, arr) => {
            rtnObj[key] = i === 0 ? obj[key] : this.floor(Number(rtnObj[arr[i-1]]) + Number(obj[key]));
        });

        return rtnObj;

      },
      partialInDesignMixCalc(obj, number){

        let rtnObj = {};

        for(let key in obj){
            rtnObj[key] = this.floor(obj[key] * (number/100));
        } 

        return rtnObj;

      },
      calculate(){

        //Считаем полные остатки.

        this.crushedStone.full = this.lastSum(this.crushedStone.partial);
        this.sand.full = this.lastSum(this.sand.partial);
        this.mineralPowder.full = this.lastSum(this.mineralPowder.partial);

        //Сумма частных остатков каждой фркции должна быть 0
        if(this.crushedStone.full['2.5'] != 100){
            this.error.infoData = 'щебня';
            this.error.currentCode = 1;
            return;
        }else if(this.sand.full['0.070'] != 100){
            this.error.infoData = 'песка';
            this.error.currentCode = 1;
            return;
        }else if(this.mineralPowder.full['0.070'] != 100){
            this.error.infoData = 'минерального порошка';
            this.error.currentCode = 1;
            return;
        }else{
            this.error.currentCode = 0;
            this.error.infoData = '';
        }

       

        //Гранулометрический состав материалов в проектируемой смеси, частные остатки, %

        this.crushedStone.number = this.floor((45/this.crushedStone.full[5])*100);
        this.crushedStone.partialInDesignMix = this.partialInDesignMixCalc(this.crushedStone.partial, this.crushedStone.number);

        this.mineralPowder.number = this.floor((8/this.mineralPowder.partial['0.070'])*100);
        this.mineralPowder.partialInDesignMix = this.partialInDesignMixCalc(this.mineralPowder.partial, this.mineralPowder.number);

        this.sand.number = 100-this.mineralPowder.number-this.crushedStone.number;
        this.sand.partialInDesignMix = this.partialInDesignMixCalc(this.sand.partial, this.sand.number);

        //Создаем карту ключей по 3ем массивам

        let key_map = [
            ...Object.keys(this.crushedStone.partial), 
            ...Object.keys(this.sand.partial), 
            ...Object.keys(this.mineralPowder.partial)
        //].filter((item, pos, a) => a.indexOf(item) == pos && item!='40').sort((a, b) => b-a);
        ].filter((item, pos, a) => a.indexOf(item) == pos && item!='40').sort((a, b) => b-a);

        this.keyMap = key_map;

        let obj_map = [this.crushedStone.partialInDesignMix, this.sand.partialInDesignMix, this.mineralPowder.partialInDesignMix];

        for(let key of key_map){
            let sum = 0;
            for(let obj of obj_map){
                sum += key in obj ? obj[key] : 0;
            }
            this.sumOfPartialLeftovers[key] = this.floor(sum);
        }

        this.fullLeftovers = this.lastSum(this.sumOfPartialLeftovers);

        for(let key of key_map){
            this.fullWalkways[key] = this.floor(100-this.fullLeftovers[key]);
        }

        //Данные берутся из таблицы ГОСТ 9128-97
        let GOST_fullWalkways_min = [90, 80, 70, 50, 38, 28, 20, 14, 10, 6, 0];
        let GOST_fullWalkways_max = [100, 100, 100, 60, 48, 37, 28, 22, 16, 12, 0];

        let i = 0;
        this.keyMapBad = [];
        for(let key of key_map){

            this.GOST_fullWalkways[key] = [GOST_fullWalkways_min[i], GOST_fullWalkways_max[i]];
            this.GOST_fullLeftovers[key] = [100-GOST_fullWalkways_max[i], 100-GOST_fullWalkways_min[i]];

            if(this.fullWalkways[key] < this.GOST_fullWalkways[key][0] || this.fullWalkways[key] > this.GOST_fullWalkways[key][1] && key!=0.070){
                this.keyMapBad.push(key);
            }

            i++;
        }

        if(this.keyMapBad.length){
            this.error.currentCode = 2;
            this.buildChart();
            return;
        }else{
            this.error.currentCode = 0;
            this.buildChart();
        }

        
        

        let obj_map_main = [this.crushedStone, this.sand, this.mineralPowder];

        let bc = this.bitumenConsumption;

        this.bitumenConsumptionSum = 0;

        key_map.forEach((key, i, arr) => {

            this.bitumenConsumption[key] = [];

            for(let obj of obj_map_main){

                if(key in obj.partialInDesignMix){

                    obj.consumptionOfMaterials[key] = this.floor(obj.partialInDesignMix[key]/100, 3);

                    let a = this.floor(obj.consumptionOfMaterials[key]*obj.specificВitumen[key], 4);
                    
                    this.bitumenConsumption[key].push(this.floor(obj.consumptionOfMaterials[key]*obj.specificВitumen[key], 4));

                    this.bitumenConsumptionSum += a;
                }

                
            }

        });

        this.bitumenConsumptionSum = this.floor(this.bitumenConsumptionSum, 2);
        this.bitumenConsumptionEndSum = this.floor(this.bitumenConsumptionSum*this.selectedBitumenTypeK, 2);

        this.mess.i++;
        this.mess['mess'] = 'расчёт №'+this.mess.i;

      },
      buildChart(){

        //Ломаем предыдущий график, если он был построен.
          
        if(this.myChart!=='')  
            this.myChart.destroy();

        const canvas = document.getElementById('myChart');
        const ctx = canvas.getContext('2d');

        let GOST_fullWalkways_min = [90, 80, 70, 50, 38, 28, 20, 14, 10, 6, 0];
        let GOST_fullWalkways_max = [100, 100, 100, 60, 48, 37, 28, 22, 16, 12, 0];
        let fullWalkways_data = [];

        for(let key of this.keyMap){
            fullWalkways_data.push(this.fullWalkways[key]);
        }
        
        let mainLineColor = this.error.currentCode === 2 ? 'red' : '#5EC195';
        let mainLineDash = this.error.currentCode === 2 ? [10,5] : [];

        this.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: this.keyMap,
                datasets: [
                {
                    label: 'main line',
                    data: fullWalkways_data,
                    borderColor: mainLineColor,
                    borderDash: mainLineDash,
                    fill: false,
                    borderWidth: 2
                },   
                {
                    label: 'min',
                    data: GOST_fullWalkways_min,
                    backgroundColor: pattern.draw('diagonal',  'rgba(0, 0, 0, 0)', '#E5E5E5'),
                    borderColor: 'rgba(25, 99, 132, 1)',
                    fill: 2,
                    borderWidth: 1
                },
                {
                    label: 'max',
                    data: GOST_fullWalkways_max,
                    backgroundColor: pattern.draw('diagonal', 'rgba(0, 0, 0, 0)', '#E5E5E5'),
                    borderColor: 'rgba(25, 99, 132, 1)',
                    fill: false,
                    borderWidth: 1
                }
               ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "% по массе размера зерен, мельче, мм",
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Размер зерен минирального материала, мм",
                        }
                    }]
                }
            }
        });

        

        
      }

  },
  mounted(){

  }
}
</script>
