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
        filter: function () {
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
            @keyup="filter"
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
