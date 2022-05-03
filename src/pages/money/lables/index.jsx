import { List, PullToRefresh, SwipeAction } from 'antd-mobile';

const Lables = () => {
  const items = ['A', 'B', 'C'];
  const rightActions = [
    {
      key: 'delete',
      text: '删除',
      color: 'danger',
    },
  ];

  return (
    <div>
      <PullToRefresh>
        <List>
          {items.map((item) => (
            <SwipeAction key={item} rightActions={rightActions}>
              <List.Item>{item}</List.Item>
            </SwipeAction>
          ))}
        </List>
      </PullToRefresh>
    </div>
  );
};

export default Lables;
