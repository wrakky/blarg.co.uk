module Jekyll
  module LinkFilter
    def link(input)
        input.gsub(/.html$/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::LinkFilter)