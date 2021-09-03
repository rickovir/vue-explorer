<template>
  <div class="calculator">
      <div class="calculator-container">
          <Displayer :data="current" />
          <div class="keyboard">
              <div class="keyboard-row">
                  <ButtonKeyboard @on-pressed="clearDisplay" data="AC" />
                  <ButtonKeyboard @on-pressed="changeSign" data="+/-" />
                  <ButtonKeyboard @on-pressed="convertPercent" data="%" />
                  <ButtonKeyboard @on-pressed="handleOperator" data="÷" />
              </div>
              <div class="keyboard-row">
                  <ButtonKeyboard @on-pressed="appendSymbol" data="7" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="8" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="9" />
                  <ButtonKeyboard @on-pressed="handleOperator" data="x" />
              </div>
              <div class="keyboard-row">
                  <ButtonKeyboard @on-pressed="appendSymbol" data="4" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="5" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="6" />
                  <ButtonKeyboard @on-pressed="handleOperator" data="-" />
              </div>
              <div class="keyboard-row">
                  <ButtonKeyboard @on-pressed="appendSymbol" data="1" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="2" />
                  <ButtonKeyboard @on-pressed="appendSymbol" data="3" />
                  <ButtonKeyboard @on-pressed="handleOperator" data="+" />
              </div>
              <div class="keyboard-row">
                  <ButtonKeyboard @on-pressed="appendSymbol" data="0" />
                  <ButtonKeyboard @on-pressed="convertDecimal" data="." />
                  <ButtonKeyboard @on-pressed="handleOperator" data="=" />
              </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ButtonKeyboard from '@/components/ButtonKeyboard.vue'; // @ is an alias to /src
import Displayer from '@/components/Displayer.vue'; // @ is an alias to /src

@Component({
  components: {
    Displayer,
    ButtonKeyboard
  },
})
export default class Home extends Vue {
  current?:string = "";
  operator?:string = "";
  previous?:number = 0;
  clickedOperator?:boolean= false;

  
  clearDisplay () {
    this.current = ''
    this.previous = 0;
    this.operator = '';
    this.clickedOperator = false
  }

  convertDecimal () {
    if (this.clickedOperator) {
      this.current = '0.'
      this.clickedOperator = false
    }
    if (this.current?.indexOf('.') === -1) {
      this.current += '0.'
    }
  }

  changeSign () {
    this.current = this.current?.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
  }

  convertPercent () {
    this.current = `${parseFloat(this.current ?? '') / 100}`
  }

  appendSymbol(data:string) {
    console.log(data);
    if (this.clickedOperator) {
      this.clickedOperator = false
      this.current = data;
    } else {
      this.current = this.current === '0' ? data : `${this.current}${data}`;
    }
  }
  
  handleOperator(newOperator:string) {
    const numberValue = parseFloat(this.current ?? '');
    if (this.operator && this.clickedOperator) {
      this.operator = newOperator
    }
    if (this.previous == 0) {
      this.previous = numberValue
    } 
    else if(this.operator) {
      const result = this.calculate(this.previous, numberValue, this.operator);
      this.current = String(result);
      this.previous = result;
    }
    this.clickedOperator = true
    this.operator = newOperator
  }

  calculate(first:number, second:number, operator:string) {
    console.log(operator)
    switch(operator) {
      case "+":
        return first+second;
      case "-":
        return first-second;
      case "x":
        return first*second;
      case "÷":
        return first/second;
      default:
        return second;
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator-container{
  margin: auto;
  width: 300px;
  background: #3e3e3e;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  .keyboard{
    display: flex;
    flex-direction: column;
    .keyboard-row{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
}
</style>