class InsertionSort {

    // [10, 8, 3, 5] , n = 4
    insertionSort(list, n) {
        let currentValue = 0;
        let j = 0;

        // i = 0
        // i < 4
        for (let i = 0; i < n; i++) {
            currentValue = list[i]; // 10
            j = i - 1; // -1
            // -1 >= 0 &&
            while (j >= 0 && list[j] > currentValue) {
                list[j + 1] = list[j];
                j = j - 1;
            }
            list[j + 1] = currentValue;
        }
        return list;
    }
}

const insertionSort = new InsertionSort();