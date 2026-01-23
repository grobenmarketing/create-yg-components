#!/usr/bin/env python3
"""
Component Gallery Build Script

This script assembles the component-gallery.html file from a template
and individual component partials, similar to Hugo's include system.

Usage:
    python build.py

The script reads template.html and replaces INCLUDE comments with
the content from partials/*.html files.
"""

import re
import os
from pathlib import Path


def load_partial(partial_name):
    """Load a partial file from the partials directory."""
    partial_path = Path("partials") / f"{partial_name}.html"

    if not partial_path.exists():
        print(f"Warning: Partial '{partial_name}' not found at {partial_path}")
        return f"<!-- ERROR: Partial '{partial_name}' not found -->"

    with open(partial_path, 'r', encoding='utf-8') as f:
        content = f.read()

    return content


def build_html_from_template(template_path, output_path):
    """Build an HTML file from a template and partials."""
    if not template_path.exists():
        print(f"Error: Template file not found at {template_path}")
        return False

    # Read the template
    with open(template_path, 'r', encoding='utf-8') as f:
        template_content = f.read()

    # Find all INCLUDE comments using regex
    # Pattern: <!-- INCLUDE: partial-name -->
    include_pattern = r'<!-- INCLUDE: ([\w-]+) -->'

    def replace_include(match):
        partial_name = match.group(1)
        print(f"  Including: {partial_name}")
        return load_partial(partial_name)

    # Replace all includes with their content
    output_content = re.sub(include_pattern, replace_include, template_content)

    # Write the output file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_content)

    print(f"\n✓ Build complete: {output_path}")
    return True


def build_html():
    """Build all HTML files from templates and partials."""
    templates = [
        (Path("template.html"), Path("index.html")),
        (Path("template-new-design.html"), Path("new-design.html")),
    ]

    success = True
    for template_path, output_path in templates:
        print(f"\nBuilding {output_path} from {template_path}...")
        if not build_html_from_template(template_path, output_path):
            success = False

    return success


def main():
    """Main entry point for the build script."""
    print("Building component gallery...")
    print("-" * 50)

    # Check if partials directory exists
    partials_dir = Path("partials")
    if not partials_dir.exists():
        print(f"Error: Partials directory not found at {partials_dir}")
        return 1

    # List available partials
    partials = sorted(partials_dir.glob("*.html"))
    print(f"\nFound {len(partials)} partials:")
    for partial in partials:
        print(f"  - {partial.stem}")

    print("\nAssembling components...")

    # Build the HTML
    if build_html():
        return 0
    else:
        return 1


if __name__ == "__main__":
    exit(main())
