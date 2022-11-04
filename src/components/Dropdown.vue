<script>
export default {
    data() {
        return {
            fruits: null, // for store the API data
        };
    },
    async created() {
        // fetch data from API and store it into fruits variable
        const res = await fetch("http://localhost:8888/api/fruits");
        const data = await res.json();
        const fruits = await data.data.fruits;
        this.fruits = await fruits;
    },
    methods: {
        showItems: function () {
            //show and hide the dropdown
            document.querySelector(".items").classList.toggle("hidden");
            document
                .querySelectorAll(".item")
                .forEach((item) => item.classList.toggle("hidden"));
            document
                .querySelector(".dropdown__btn")
                .classList.toggle("clicked");
            document.querySelector(".not-found").classList.toggle("hidden");
        },
        findFruits: function () {
            //filter the search of fruits in the dropdown
            let search = document.getElementById("dropdown-search"),
                filter = search.value.toLowerCase(),
                notFound = document.querySelector(".not-found");

            //check if the input has spaces and trim it if it's true
            if (search.value.includes(" ") && search.value.trim() === "") {
                search.value = "";
                return;
            }

            const fruits = document.querySelectorAll(".item");
            fruits.forEach((fruit) => {
                if (fruit.textContent.toLowerCase().includes(filter)) {
                    fruit.classList.remove("hidden");
                    notFound.classList.add("hidden");
                } else {
                    fruit.classList.add("hidden");
                }

                const fruitsHidden = document.querySelectorAll(".item.hidden");
                //to show the notFound element the subtraction result must be equal to zero
                if (fruits.length - fruitsHidden.length === 0) {
                    notFound.classList.remove("hidden");
                    return;
                }
            });
        },
    },
};
</script>

<template>
    <div class="dropdown">
        <input
            type="text"
            name="dropdown__search"
            id="dropdown-search"
            placeholder="Select an item"
            @focus="showItems"
            @focusout="showItems"
            @keyup="findFruits"
        />
        <button class="dropdown__btn" @click="showItems">
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
        </button>
        <ul class="items hidden">
            <li v-for="fruit in fruits" class="item hidden">
                {{ fruit }}
            </li>
            <li class="not-found hidden">No item weres found.</li>
        </ul>
    </div>
</template>

<style scoped>
.dropdown {
    width: Hug (256px);
    height: Hug (56px);
    border-radius: 8px;
    padding: 16px;
    outline: none;
    border: none;
    background: white;
    box-shadow: 0px 10px 15px rgba(35, 78, 82, 0.1);
}

button {
    cursor: pointer;
}

.fa-chevron-down {
    font-size: 13px;
    opacity: 0.4;
    transition: transform 200ms;
}

input {
    font-size: 16px;
}

input,
button {
    border: none;
    outline: none;
    background-color: inherit;
}

button.clicked .fa-chevron-down {
    transform: rotate(180deg);
}

.hidden {
    display: none;
}

ul {
    list-style-type: none;
    padding-left: 0;
    font-weight: 600;
    line-height: 24px;
    height: Hug (284px);
    overflow: hidden;
}

ul li {
    font-size: 14px;
    padding: 5px;
}

ul li::first-letter {
    text-transform: capitalize;
}

ul li:hover {
    color: #4299e1;
    cursor: pointer;
}

.not-found {
    color: #a0aec0;
}
</style>
