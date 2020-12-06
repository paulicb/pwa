<template>
    <div>
        <button :class="{ active: filter == 'all' }" @click="changeFilter('all')" class="btn btn-outline-primary">All</button>
        <button :class="{ active: filter == 'active' }" @click="changeFilter('active')" class="btn btn-outline-primary">Active</button>
        <button :class="{ active: filter == 'completed' }" @click="changeFilter('completed')" class="btn btn-outline-primary">Completed</button>
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