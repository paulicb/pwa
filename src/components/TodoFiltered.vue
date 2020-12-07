<template>
    <div>
        <button :class="{ active: filter == 'all' }" @click="changeFilter('all')" class="button btn btn-light ">All</button>
        <button :class="{ active: filter == 'active' }" @click="changeFilter('active')" class="button btn btn-light">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="changeFilter('completed')" class="button btn btn-light">Completed</button>
      </div>
</template>

<script>
export default {
    name: 'todo-filtered',
    computed: {
        filter(){
            return this.$store.state.filter
        }
    },
    methods: {
        changeFilter(filter){
            this.$store.dispatch('updateFilter',filter)
        }
    }
}
</script>