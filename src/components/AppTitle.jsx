export default function AppTitle(props) {
  const { title = 'Box Office', subtitle = 'Search for a movies or an actor' } =
    props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
