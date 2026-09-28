import Image from "next/image";
import { StaffMember } from "@/app/data/staff";

type StaffCardProps = {
  member: StaffMember;
};

export default function StaffCard({ member }: StaffCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative h-72 w-full overflow-hidden bg-gray-100">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Information */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">
          {member.name}
        </h2>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {member.position}
        </p>

        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">
            Specialization
          </p>

          <p className="mt-1 text-sm font-medium text-gray-800">
            {member.specialization}
          </p>
        </div>

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          className="mt-5 flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            ✉
          </span>

          <span className="break-all">
            {member.email}
          </span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${member.phone}`}
          className="mt-3 flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-600"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            ☎
          </span>

          <span>{member.phone}</span>
        </a>
      </div>
    </div>
  );
}