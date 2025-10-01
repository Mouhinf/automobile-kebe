import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logokebe.jpg"
      alt="EMG Auto Market Logo"
      width={32}
      height={32}
      className="rounded-sm"
      data-ai-hint="company logo"
    />
  );
}
