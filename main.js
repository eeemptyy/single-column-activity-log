var app = new Vue({
  el: '#app',
  data: {
    loaded: false,
    message: 'Hello World2',
    title: 'EMPTY Activities',
    thisYear: 2019,
    years: [
      {
        year: 2019,
        activities: [
          {
            title: 'Title 11',
            description: 'Description 11',
            created: '2019/2/2',
          },
          {
            title: 'Title 10',
            description: 'Description 10',
            created: '2019/2/1',
          },
          {
            title: 'Title 9',
            description: 'Description 9',
            created: '2019/1/16',
          },
        ],
      },
      {
        year: 2018,
        activities: [
          {
            title: 'Title 8',
            description:
              'Description 8Description 8Description 8Description 8Description 8Description 8Description 8Description 8Description 8Description 8',
            created: '2018/12/4',
          },
          {
            title: 'Title 7',
            description: 'Description 7',
            created: '2018/11/30',
          },
          {
            title: 'Title 6',
            description: 'Description 6',
            created: '2018/7/27',
          },
          {
            title: 'Title 5',
            description: 'Description 5',
            created: '2018/5/11',
          },
          {
            title: 'Title 4',
            description: 'Description 4',
            created: '2018/3/9',
          },
        ],
      },
      {
        year: 2017,
        activities: [
          {
            title: 'Title 3',
            description: 'Description 3',
            created: '2017/12/20',
          },
          {
            title: 'Title 2',
            description: 'Description 2',
            created: '2017/10/14',
          },
          {
            title: 'Title 1',
            description: 'Description 1',
            created: '2017/7/28',
          },
        ],
      },
    ],
  },

  created() {
    this.title = 'EMPTY Activity log';
  },
});
