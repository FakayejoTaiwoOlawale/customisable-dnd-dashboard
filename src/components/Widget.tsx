// type WidgetProps = {
//   title: string;
// };

type WidgetProps={
  title:string;
  description?:string
}

export default function Widget({ title, description }: WidgetProps) {
  return (
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
