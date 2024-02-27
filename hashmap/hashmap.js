class HashMap {
    constructor(initialCapacity = 8, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity);
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        for (const entry of this.buckets[index]) {
            if (entry[0] === key) {
                // If the key already exists, update the value
                entry[1] = value;
                return;
            }
        }

        // Add a new key-value pair
        this.buckets[index].push([key, value]);
        this.size++;

        // Check if the buckets need to be expanded
        if (this.size > this.loadFactor * this.buckets.length) {
            this.grow();
        }
    }

    get(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            return null; // Key not found
        }

        for (const entry of this.buckets[index]) {
            if (entry[0] === key) {
                return entry[1]; // Return the value associated with the key
            }
        }

        return null; // Key not found
    }

    has(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            return false; // Key not found
        }

        for (const entry of this.buckets[index]) {
            if (entry[0] === key) {
                return true; // Key found
            }
        }

        return false; // Key not found
    }

    remove(key) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            return false; // Key not found
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index].splice(i, 1); // Remove the key-value pair
                this.size--;
                return true; // Key found and removed
            }
        }

        return false; // Key not found
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(8);
        this.size = 0;
    }

    keys() {
        const keysArray = [];

        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    keysArray.push(entry[0]);
                }
            }
        }

        return keysArray;
    }

    values() {
        const valuesArray = [];

        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    valuesArray.push(entry[1]);
                }
            }
        }

        return valuesArray;
    }

    entries() {
        const entriesArray = [];

        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    entriesArray.push(entry);
                }
            }
        }

        return entriesArray;
    }

    grow() {
        const newCapacity = this.buckets.length * 2;
        const newBuckets = new Array(newCapacity);

        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    const newIndex = this.hash(entry[0]) % newCapacity;

                    if (!newBuckets[newIndex]) {
                        newBuckets[newIndex] = [];
                    }

                    newBuckets[newIndex].push(entry);
                }
            }
        }

        this.buckets = newBuckets;
    }
}

// Example Usage:
const myHashMap = new HashMap();

myHashMap.set("name", "John");
myHashMap.set("age", 25);
myHashMap.set("city", "New York");

console.log(myHashMap.get("name")); // Output: John
console.log(myHashMap.has("age")); // Output: true
console.log(myHashMap.remove("city")); // Output: true

console.log(myHashMap.keys()); // Output: ['name', 'age']
console.log(myHashMap.values()); // Output: ['John', 25]
console.log(myHashMap.entries()); // Output: [['name', 'John'], ['age', 25]]
console.log(myHashMap.length()); // Output: 2

myHashMap.clear();
console.log(myHashMap.length()); // Output: 0
