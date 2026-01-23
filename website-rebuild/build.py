#!/usr/bin/env python3
"""
Website Rebuild - Build Script

This script assembles website pages from templates and reusable component partials.
It reads templates from templates/ folder and outputs to output/ folder.

Usage:
    python build.py

The script:
- Finds all .html files in templates/ folder
- Replaces <!-- INCLUDE: component-name --> comments with partial content
- Outputs generated HTML files to output/ folder
"""

import re
import os
from pathlib import Path

# Cache for loaded partials to avoid reading the same file multiple times
_partial_cache = {}


def load_partial(partial_name):
    """Load a partial file from the partials directory with caching."""
    # Check cache first
    if partial_name in _partial_cache:
        return _partial_cache[partial_name]

    partial_path = Path("partials") / f"{partial_name}.html"

    if not partial_path.exists():
        print(f"  ⚠️  Warning: Partial '{partial_name}' not found at {partial_path}")
        error_msg = f"<!-- ERROR: Partial '{partial_name}' not found -->"
        _partial_cache[partial_name] = error_msg
        return error_msg

    with open(partial_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Cache the content
    _partial_cache[partial_name] = content
    return content


# Compile regex pattern once for better performance
# Support subdirectories with forward slashes (e.g., pages/header-clean)
INCLUDE_PATTERN = re.compile(r'<!-- INCLUDE: ([\w/-]+) -->')


def build_html_from_template(template_path, output_path):
    """Build an HTML file from a template and partials."""
    if not template_path.exists():
        print(f"  ❌ Error: Template file not found at {template_path}")
        return False

    # Read the template
    with open(template_path, 'r', encoding='utf-8') as f:
        template_content = f.read()

    def replace_include(match):
        partial_name = match.group(1)
        print(f"    Including: {partial_name}")
        return load_partial(partial_name)

    # Replace all includes with their content using precompiled pattern
    output_content = INCLUDE_PATTERN.sub(replace_include, template_content)

    # Ensure output directory exists
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Write the output file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_content)

    print(f"  ✅ Build complete: {output_path}")
    return True


def build_all_templates():
    """Build all HTML files from templates/ folder."""
    templates_dir = Path("templates")
    output_dir = Path("output")

    # Check if templates directory exists
    if not templates_dir.exists():
        print(f"❌ Error: Templates directory not found at {templates_dir}")
        print(f"💡 Tip: Create templates/ folder and add your page templates there")
        return False

    # Find all HTML files in templates directory
    template_files = sorted(templates_dir.glob("*.html"))

    if not template_files:
        print(f"⚠️  Warning: No template files found in {templates_dir}")
        print(f"💡 Tip: Add .html template files to the templates/ folder")
        return True  # Not an error, just nothing to build

    print(f"\n📄 Found {len(template_files)} template(s) to build:")
    for template in template_files:
        print(f"  - {template.name}")

    print(f"\n🔨 Building pages...")
    print("-" * 60)

    success = True
    for template_path in template_files:
        # Output file has same name as template, goes to output/ folder
        output_path = output_dir / template_path.name

        print(f"\n📝 Building {template_path.name}...")
        if not build_html_from_template(template_path, output_path):
            success = False

    return success


def main():
    """Main entry point for the build script."""
    print("=" * 60)
    print("🚀 WEBSITE REBUILD - Build Script")
    print("=" * 60)

    # Check if partials directory exists
    partials_dir = Path("partials")
    if not partials_dir.exists():
        print(f"\n❌ Error: Partials directory not found at {partials_dir}")
        print(f"💡 Tip: Make sure you're running this from the website-rebuild folder")
        return 1

    # List available partials
    partials = sorted(partials_dir.glob("*.html"))
    print(f"\n📦 Available components ({len(partials)} partials):")
    for partial in partials:
        print(f"  - {partial.stem}")

    # Build all templates
    if build_all_templates():
        print("\n" + "=" * 60)
        print("✅ BUILD SUCCESSFUL")
        print("=" * 60)
        print(f"\n📁 Generated files are in the output/ folder")
        print(f"🌐 Open them in a browser to preview")
        return 0
    else:
        print("\n" + "=" * 60)
        print("❌ BUILD FAILED")
        print("=" * 60)
        print(f"\n⚠️  Check the errors above and fix them")
        return 1


if __name__ == "__main__":
    exit(main())
