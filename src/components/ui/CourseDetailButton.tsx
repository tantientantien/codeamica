export function EnrollButton({ handleClick }: { handleClick: () => void}) {
    return (
      <button className="w-fit rounded-[5px] bg-black px-6 py-4 text-2xl font-bold text-white min-w-[17rem]" onClick={handleClick}>
        Enroll for Free
      </button>
    );
}

export function ResumeButton({ handleClick }: { handleClick: () => void }) {
  return (
    <button className="w-fit min-w-[17rem] rounded-[5px] bg-[var(--yellow-btn-color)] px-6 py-4 text-2xl font-bold text-black" onClick={handleClick}>
      Resume
    </button>
  );
}