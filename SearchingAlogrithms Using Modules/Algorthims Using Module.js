export default function add(a,b){
    return a+b;
}

 //-----------BUBBLE SORT-----------------------
 module.exports=function bubblesort(inputArr)  {
     let len = inputArr.length;
     for (let i = 0; i < len; i++) {
         for (let j = 0; j < len; j++) {
             if (inputArr[j] > inputArr[j + 1]) {
                 let tmp = inputArr[j];
                 inputArr[j] = inputArr[j + 1];
                 inputArr[j + 1] = tmp;
             }
         }
     }
     return inputArr;
 };

 //-------------------SELECTION SORT---------------------------------
 module.exports=function selectionSort(selectionArr)  {
         let n = selectionArr.length;
 
         // One by one move boundary of unsorted subarray
         for (let i = 0; i < n-1; i++)
         {
             // Find the minimum element in unsorted array
             let min_idx = i;
             for (let j = i+1; j < n; j++)
                 if (selectionArr[j] < selectionArr[min_idx])
                     min_idx = j;
 
            // Swap the found minimum element with the first
             // element
             let temp = selectionArr[min_idx];
             selectionArr[min_idx] = selectionArr[i];
             selectionArr[i] = temp;
         }
 		return selectionArr;
 	};

 //------------------------BINARY SEARCH----------------------------------------
 module.exports = function binarySearch(binaryArr,first,last,key){
 let mid = (first + last)/2;  
    while( first <= last ){  
       if ( binaryArr[mid] < key ){  
         first = mid + 1;     
       }else if ( binaryArr[mid] == key ){  
        console.log("Element is found at index: " + mid);  
         break;  
       }else{  
          last = mid - 1;  
       }  
       mid = (first + last)/2;  
    }  
    if ( first > last ){  
       console.log("Element is not found!");  
    }  
    return binaryArr;
 }

