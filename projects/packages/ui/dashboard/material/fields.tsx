export function Input({ label, name, placeholder }:
    { 
        label: string;
        name: string;
        placeholder: string;
    }) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" name={name} id={name} placeholder={placeholder} />
        </div>
    );
}

export function Select({ label, name, children }: {
    label: string;
    name: string;
    children: React.ReactNode
}) {
    return (
        <div>
            <label htmlFor={name} className="block">{label}</label>
            <select name={name} id={name} className="w-full">
                {children}
            </select>
        </div>
    );
}

export function Option({ value, children }: {
    value?: string | number | readonly string [] | undefined;
    children: React.ReactNode
}) {
    return <option value={value}>{children}</option>
}

export function Checkbox({ label, name }: { label: string; name: string }) {
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input type="checkbox" name={name} id={name} />
        </div>
    );
}