import { Information } from '../Information/Information';

export const Content = () => {
  return (
    <section className='content'>
      <p className='content_text'>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich.</p>
      <p className='content_text'>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.</p>

      // картинка лампы и информация о ней
      <Information />
    </section>
  );
};
