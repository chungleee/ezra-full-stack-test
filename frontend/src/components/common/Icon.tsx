import { FiCircle, FiCheckCircle, FiTrash2 } from "react-icons/fi";

interface IconProps {
	variant: "check" | "uncheck" | "trash";
}

const Icon = ({ variant }: IconProps) => {
	switch (variant) {
		case "check":
			return <FiCheckCircle />;
		case "uncheck":
			return <FiCircle />;
		case "trash":
			return <FiTrash2 />;
	}
};

export default Icon;
