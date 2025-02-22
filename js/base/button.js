userComponents['button'] = (props) => {
  const button = new Create('button').text(props.text || 'Button');
  return button;
};