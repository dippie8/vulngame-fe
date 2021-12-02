<template>
  <div class="row"  :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
    <div class="column" >
      <div class="q-pa-md">
        <q-table :style="{width: '100%', margin: '15%'}"
          title="RANKING - IMAGES"
          dark
          card-class="text-green-5"
          :pagination="pagination"
          flat
          :rows="rowsByImage"
          :columns="columnsByImage"
          row-key="Position"
          hide-bottom
        />
      </div>
    </div>
    <div class="column">
      <div class="q-pa-md">
        <q-table :style="{width: '100%', margin: '15%'}"
          title="RANKING - USERS"
          dark
          card-class="text-green-5"
          :pagination="pagination"
          flat
          :rows="rowsByUser"
          :columns="columnsByUser"
          row-key="Position"
          hide-bottom
        />
      </div>
    </div>
  </div>
</template>

<script>
import RankingService from '../services/RankingService';

const columnsByImage = [
  { name: 'Position', align: 'center', label: '', field: 'position', sortable: false },
  { name: 'Name', align: 'center', label: 'USER', field: 'name'},
  { name: 'Image', align: 'center', label: 'IMAGE', field: 'image' },
  { name: 'Score', align: 'center', label: 'SCORE', field: 'score' },
]

const columnsByUser = [
  { name: 'Position', align: 'center', label: '', field: 'position', sortable: false },
  { name: 'Name', align: 'center', label: 'USER', field: 'name'},
  { name: 'Score', align: 'center', label: 'SCORE', field: 'score' },
]

const rowsByImage = []
const rowsByUser = []

export default{
  data () {
    return {
      svc: null,
      pagination: { 
        rowsPerPage: 10,
        sortBy: 'desc',
        descending: false,
        page: 1

      },
      columnsByImage,
      columnsByUser,
      rowsByImage,
      rowsByUser,
    }
  },
  created() {
		this.svc = new RankingService();
	},
	mounted() {
		// this.svc.getRanking().then(
    //   data => {
    //     this.rowsByImage = data.byImage
    //     this.rowsByUser = data.byUser
    //   }
    // );
    this.fetchEventsList();
    this.timer = setInterval(this.fetchEventsList, 10000);
  },
  methods: {
    fetchEventsList () {
      this.svc.getRanking().then(
        data => {
          this.rowsByImage = data.byImage
          this.rowsByUser = data.byUser
        }
      );
    },
    cancelAutoUpdate () {
        clearInterval(this.timer);
    }
},
}
</script>

<style>

.row{
  background-attachment: fixed;
  background-position: center;
}

.q-pa-md{
  padding: 0px 0px;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 0;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.text-center {
  font-size: large !important;
  font-family: "Matrix" !important;
}

.q-table__title {
  font-weight: 700 !important;
  font-family: "Matrix" !important;
}
</style>
