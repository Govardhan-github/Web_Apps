
import { add } from "./Algorthims Using Module";
console.log(add(4,5));

 //---------BUBBLE SORT--------------------
 const bubblesort = require("./Algorthims Using Module")
 const inputArr = [45,55,44,555,76,74]
 console.log("The Array By Bubble Sort Is :"+bubblesort(inputArr));

 //-----------SELECTION SORT---------------------
 const selectionSort = require("./Algorthims Using Module")
 const selectionArr = [45,44,555,76]
 console.log("The Array By Selection Sort Is :" +selectionSort(selectionArr));

 //--------------BINARY SEARCH-------------------------------
 const  binarySearch= require("./Algorthims Using Module")
 const binaryArr = [1,2,3,4,5,6,7]
 let first = 0;
 const last = binaryArr.length - 1 ;
 const key =10;
 console.log("The Array By binary saarch Is :" +binarySearch(binaryArr,first,last,key));


