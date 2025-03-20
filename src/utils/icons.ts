// Selectively import Lucide icons to reduce bundle size
// This approach ensures only the icons we use are included in the final bundle

// Common UI icons
import { 
  ChevronDown, 
  ChevronUp,
  Check,
  X,
  Info
} from 'lucide-react';

// Feature/Marketing icons
import {
  Shield,
  Zap,
  Cloud,
  FileImage,
  Image,
  Upload,
  Server,
  Layers,
  RefreshCw,
  Users,
  Search,
  Lock,
  Download,
  Share,
  Building,
  Mail,
  MapPin,
  Folder,
  Edit,
  Heart,
  Coffee,
  Globe,
  Gift,
  Code,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Phone,
  Send
} from 'lucide-react';

// Group icons by category for easier management
export const uiIcons = {
  ChevronDown,
  ChevronUp,
  Check,
  X,
  Info
};

export const featureIcons = {
  Shield,
  Zap,
  Cloud,
  FileImage,
  Image,
  Upload,
  Server,
  Layers,
  RefreshCw,
  Users,
  Search,
  Lock,
  Download,
  Share,
  Folder,
  Edit
};

export const contactIcons = {
  Building,
  Mail,
  MapPin,
  Phone,
  Send
};

export const aboutIcons = {
  Heart,
  Coffee,
  Globe,
  Gift,
  Code,
  BookOpen
};

export const miscIcons = {
  CheckCircle,
  ArrowRight
};

// Export a combined object for convenience
export default {
  ...uiIcons,
  ...featureIcons,
  ...contactIcons,
  ...aboutIcons,
  ...miscIcons
}; 