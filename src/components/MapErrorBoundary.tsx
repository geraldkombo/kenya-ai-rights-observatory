"use client";

import { Component } from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export default class MapErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("MapErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex h-[400px] items-center justify-center rounded-xl border border-[#E0DBD0] bg-[#F8F5F0] text-sm text-[#6B6355]">
            Map loading failed. Check console for details.
          </div>
        )
      );
    }
    return this.props.children;
  }
}
