export default function PageHeader({ title = "Page Title", breadcrumb, children }) {
    const renderBreadcrumb = () => {
      if (!breadcrumb) return null;
  
      if (typeof breadcrumb === "string") {
        return (
          <span id="breadcrumb-single" className="text-gray-500">
            {breadcrumb}
          </span>
        );
      }
  
      if (Array.isArray(breadcrumb)) {
        return breadcrumb.map((item, index) => (
          <span key={index} className="flex items-center text-gray-500">
            {index !== 0 && <span className="mx-1">/</span>}
            <span>{item}</span>
          </span>
        ));
      }
  
      return null;
    };
  
    return (
      <div id="pageheader-container" className="flex items-center justify-between p-4">
        <div id="pageheader-left" className="flex flex-col">
          <span id="page-title" className="text-3xl font-semibold">
            {title}
          </span>
          <div id="breadcrumb-links" className="flex items-center font-medium space-x-1 mt-2">
            {renderBreadcrumb()}
          </div>
        </div>
        <div id="action-button">
          {children}
        </div>
      </div>
    );
  }