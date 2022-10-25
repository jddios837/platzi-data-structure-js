

class BubbleSort {

    constructor() {
    }

    // [10, 8, 3, 5] , n = 4
    bubbleSort(list, n) {
        // i = 1
        // 1 < 3
        for (let i = 0; i < n - 1; i++) {
            // j = 0
            // 0 < 2
            for (let j = 0; j < n - i - 1; j++) {
                // list[2] > list[3]
                if (list[j] > list[j + 1]) {
                    const temp = list[j]; // 10
                    list[j] = list[j + 1]; // list[2] = 5
                    list[j + 1] = temp; // list[2] = 10
                }
            }
            // [8, 3, 5, 10]
        }
        return list;
    }
}

const bubbleSort = new BubbleSort();