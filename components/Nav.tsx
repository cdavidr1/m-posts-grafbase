import Image from "next/image";
import Link from "next/link";

const Nav = async () => {
  return (
    <nav className='flex'>
      <div className='flex-1 flex justify-start border-4 border-green-300 gap-10'>
          <section>left1</section>
          <section>left2</section>
      </div>
      <div className='flex-1 flex justify-center border-4'>
        Middle
      </div>
      <div className='flex-1 flex justify-end border-4 border-red-400 gap-10'>
        <section>right1</section>
        <section>right2</section>
      </div>
    </nav>
  );
};

export default Nav;