import { MdAdd } from "react-icons/md";

export default function PostAds() {
  return (
    <section className="flex justify-between max-w-7xl w-full mt-8 py-6 px-6 bg-[#2A2634] border-t-8 rounded-lg">
      <div className="flex flex-col">
        <h2 className="text-2xl font-black mb-1 text-white">
          <strong>Não encontrou seu duo? &#128554;</strong>
        </h2>
        <p className="text-base text-zinc-400">
          Publique um anúncio para encontrar novos players!
        </p>
      </div>

      <button className="flex items-center bg-violet-500 hover:bg-violet-400 transition-all ease-in-out duration-200">
        <MdAdd className="mr-3 text-xl text-white" />
        <p className="text-base font-medium text-white">Publicar anúncio</p>
      </button>
    </section>
  );
}
