class ListaNumeros {
    constructor(){
        this.nums = [];
    }

    set addNum(num){
        this.nums.push(num);
    }

    set addNums(nums){
        this.nums = this.nums.concat(nums);
    }

    get getNums(){
        return this.nums;
    }

    get getSize(){
        return this.nums.length;
    }

    get getSorted(){
        return this.nums.sort((a, b) => a - b);
    }

    get getReversed(){
        return this.nums.reverse();
    }

    get findAvg(){
        let suma = 0;
        for(let i = 0; i < this.nums.length; i++){
            suma += this.nums[i];
        }
        return suma / this.nums.length;
    }

    get findSum(){
        let suma = 0;
        for(let i = 0; i < this.nums.length; i++){
            suma += this.nums[i];
        }
        return suma;
    }

    get findMax(){
        let max_num = Number.NEGATIVE_INFINITY;
        for( let num of this.nums ){
            if( num > max_num ){
                max_num = num;
            }
        }
        return max_num;
    }

    get findMin(){
        let min_num = Number.POSITIVE_INFINITY;
        for( let num of this.nums ){
            if( num < min_num ){
                min_num = num;
            }
        }
        return min_num;
    }

}

let lista = new ListaNumeros();
lista.addNum = 1;
lista.addNums = [2, 3, 4];
lista.addNum = -3;
console.log(lista.getNums);
console.log(lista.findMax);